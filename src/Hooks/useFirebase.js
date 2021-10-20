import { useEffect, useState } from 'react';
import firebaseInitialization from '../Firebase/Firebase.init';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";


firebaseInitialization()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // User name
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    // User Email
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    // user Password
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        registerWithEmailAndPass(email, password)
    }

    // Handle Registration form
    const registerWithEmailAndPass = (email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const emailUser = result.user
                updateUserProfile()
                setUser(emailUser)
                setError('')
                window.location.reload()
            }).catch(error => {
                setError(error.message);
            }).finally(() => setLoading(false))
    }

    const updateUserProfile = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    // Login Process
    const loginProcess = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loginUser = result.user
                setUser(loginUser)
                setError('')
            }).catch(error => {
                setError(error.message)
            }).finally(() => setLoading(false))

    }

    const handleLogin = (e) => {
        e.preventDefault();
        loginProcess(email, password)
    }

    // Handle Google Sign In
    const signInWithGoogle = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            setLoading(true)
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)

        })
        return () => unsubscribed;
    }, [])

    // Sign Out BUtton
    const logOut = () => {

        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        })
    }

    return {
        signInWithGoogle,
        user,
        error,
        email,
        password,
        logOut,
        setUser,
        setError,
        loading,
        registerWithEmailAndPass,
        setLoading,
        loginProcess,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLogin
    }
};

export default useFirebase;