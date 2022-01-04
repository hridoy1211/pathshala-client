import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const auth = getAuth();

    const handleGoogleSignin = () =>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
        })
        .then(error => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    }

    const handleGithubSignin = () =>{
        setIsLoading(true)
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
        })
        .then(error => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false))
    }

    const registerUser = (email,password) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            setError(''); 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        })
        .finally(() => setIsLoading(false))
    }

    const loginUser = (email,password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            setError('');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        })
        .finally(() => setIsLoading(false))
    }

    // observe user state
    useEffect(() =>{
        const unsubscibe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscibe;
    },[])

    const logout = () =>{
        signOut(auth).then(() => {
        
        }).catch((error) => {
        
        })
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        error,
        handleGoogleSignin,
        handleGithubSignin,
        registerUser,
        loginUser,
        logout,
        isLoading
    }
};

export default useFirebase;