import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CallContext } from '../Contexting/Context';

const Drawer = () => {
    const { User, logOutUser } = useContext(CallContext)
    const handleSignOut = () => {
        logOutUser()
        .then(() => {
        })
        .catch ((err) => {
            console.log(err)
        });
    }
    const navbarData = User?.email ?
        <li className='btn btn-sm rounded-xl  bg-cyan-400 text-white hover:bg-cyan-500 border-none w-full' onClick={handleSignOut}><a>signOut</a></li>
        :
        <><Link to={'/login'}><li className='btn btn-sm bg-cyan-400 text-white rounded-xl  hover:bg-cyan-500 border-none w-full mb-2'>login</li></Link>
        <Link to={'/register'}><li className='btn btn-sm rounded-xl bg-cyan-400 text-white hover:bg-cyan-500 border-none w-full'>register</li></Link></>
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-60 bg-blue-2 text-white">
                        {navbarData}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Drawer;