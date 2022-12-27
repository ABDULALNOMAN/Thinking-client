import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const CallContext = createContext()
const auth = getAuth(app)
const Context = ({ children }) => {

    const [User,setUser] = useState({})
    const handleRegisteUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currrentUser => {
            setUser(currrentUser)
      })
      return () => {
        unSubcribe()
      }
    },[])
    const logOutUser = () => {
        return signOut(auth)
    }
    const users ={handleRegisteUser,handleLoginUser,User,logOutUser} 
    return (
        <div>
            <CallContext.Provider value={users}>
                {children}
            </CallContext.Provider>
        </div>
    );
};
export default Context;