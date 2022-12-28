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
        <li onClick={handleSignOut}><a>signOut</a></li>
        :
        <><li><Link to={'/login'}>Item 1</Link></li>
        <li><Link to={'/register'}>Item 2</Link></li></>
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                        {navbarData}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Drawer;