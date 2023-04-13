import React, { createContext, useState,  } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../../firebase/firebase.config';

export const AuthContext = createContext();
const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]=useState();
    const GoogleProvider= (email, password)=> {
        return signInWithPopup(auth, email, password)
    }
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Login=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut =()=>{
        return signOut(auth)
    }
    const unSubscribe= onAuthStateChanged(auth, (currentUser=>{
        console.log(currentUser)
        setUser(currentUser)
       return ()=>{
          unSubscribe()
       }
    }))
    const authInfo={
        createUser, 
        Login,
        LogOut,
         user,
         GoogleProvider
        
        }
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;