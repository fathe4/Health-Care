import { useEffect, useState } from 'react';
import firebaseInitialization from '../Firebase/Firebase.init';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";


firebaseInitialization()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [form, setForm] = useState({})
    const auth = getAuth();
    const email = form.email
    const password = form.password


    // Handle Registration form
    const registerWithEmailAndPass = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                const emailUser = result.user
                updateUserProfile()
                setUser(emailUser)
                setError('')
            }).catch(error => {
                setError(error.message);
            }).finally(() => setLoading(false))
    }

    useEffect(() => {
        registerWithEmailAndPass(email, password)
    }, [form])

    //  Update user Profile

    const updateUserProfile = () => {
        const userName = form.name
        updateProfile(auth.currentUser, { displayName: userName })
            .then(result => { })
    }

    // Login Process
    const loginProcess = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loginUser = result.user
                setUser(loginUser)
                setError('')
            }).catch(error => {
                setError(error.message)
            }).finally(() => setLoading(false))
    }

    loginProcess(email, password)



    // Handle Google Sign In
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            }).catch(error => {
                setError(error.message)
            }).finally(() => setLoading(false))
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(true)
        })
        return () => unsubscribed;
    }, [])

    // Sign Out BUtton
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        }).finally(() => setLoading(false))
    }

    return {
        signInWithGoogle,
        user,
        error,
        logOut,
        setForm,
        loading,
        registerWithEmailAndPass,
        setLoading

    }
};

export default useFirebase;