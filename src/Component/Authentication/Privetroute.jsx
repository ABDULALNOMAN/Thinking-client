import React, { useContext } from 'react';
import { CallContext } from '../Contexting/Context';
import { Navigate, useLocation } from 'react-router-dom';

const Privetroute = ({ children }) => {
    const { User, loding } = useContext(CallContext)
    const location = useLocation()
    if(loding){
        return <p>loding ...</p>
    }
    if (User && User.uid) {
        return children
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default Privetroute;