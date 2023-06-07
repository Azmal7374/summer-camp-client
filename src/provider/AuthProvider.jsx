import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const googleProvider =new GoogleAuthProvider()
    const [user, setUser] = useState('');


     const createUser = (email, password) => {
        setLoading(true);
        return  createUserWithEmailAndPassword(auth, email, password);
     }

     const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
     }

     const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }
  

     const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
     }
    
     const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser,{
           displayName: name,
           photoURL: photo
         })
  
      }
    const logOut = () =>{
        return signOut (auth) 
     }

     const resetPassword =(email) =>{
       sendPasswordResetEmail(auth, email)
     }

     // observed user auth state
     useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            return unsubscribe;
        }
     },[])

     const authInfo ={

        user, 
        loading,
        createUser,
        signIn,
        googleSignIn,
        logIn,
        logOut,
        updateUserProfile,
        resetPassword


     }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;