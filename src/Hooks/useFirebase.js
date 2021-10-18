import { useEffect, useState } from 'react';
import firebaseInitialization from '../Firebase/Firebase.init';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";


firebaseInitialization()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const [form, setForm] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const email = form.email
    const password = form.password


    const registerWithEmailAndPass = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const emailuser = result.user;
                console.log(emailuser);
            })

    }



    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            }).catch(error => {
                setError(error.message)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }

    return {
        signInWithGoogle,
        user,
        error,
        logOut,
        setForm,
        registerWithEmailAndPass

    }
};

export default useFirebase;