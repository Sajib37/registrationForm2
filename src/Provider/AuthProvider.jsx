import { Children, createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";
const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    
    const [user, setUser]=useState({})
    // funtions are here

    // google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Create user
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email,password) => {
        return signInWithEmailAndPassword(auth, email,password)
    }

    // onAuth State

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
          });
    },[])

    console.log(user)


    // sign out
    const logOut = () => {
        signOut(auth);
    }
    // all authentiactions sotored in a object

    const authentiaction = {
        googleLogin,
        createUser,
        signInWithEmail,
        user,
        logOut
    }
    return (
        <AuthContext.Provider value={authentiaction}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;