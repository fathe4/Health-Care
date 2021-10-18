import { useEffect, useState } from 'react';
import firebaseInitialization from '../Firebase/Firebase.init';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword } from "firebase/auth";


firebaseInitialization()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const [form, setForm] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const email = form.email
    const password = form.password


    const registerWithEmailAndPass = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const emailUser = result.user
                console.log(emailUser);
            }).catch(error => {
                console.log(error.message);
            })

    }

    registerWithEmailAndPass(email, password)



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