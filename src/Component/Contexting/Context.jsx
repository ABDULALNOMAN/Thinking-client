import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const CallContext = createContext()
const auth = getAuth(app)
const Context = ({ children }) => {

    const [loding,setLoding]=useState(true)
    const [User,setUser] = useState({})
    const handleRegisteUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLoginUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currrentUser => {
            setLoding(false)
            setUser(currrentUser)
        })
        return () => {
            unSubcribe()
        }
    },[])
    const logOutUser = () => {
        return signOut(auth)
    }
    const handleUpdataeUser=(updateData)=>{
        return updateProfile (auth.currentUser, updateData)
    }
    const users ={handleRegisteUser,handleLoginUser,User,logOutUser,handleUpdataeUser,loding} 
    return (
        <div>
            <CallContext.Provider value={users}>
                {children}
            </CallContext.Provider>
        </div>
    );
};
export default Context;