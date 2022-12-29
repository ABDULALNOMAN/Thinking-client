import React, { useContext } from 'react';
import { CallContext } from '../Contexting/Context';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const { User } = useContext(CallContext)
    return (
        <div className=' bg-blue-2 text-white'>
            <div className='max-w-5xl mx-auto'>
                <div className="navbar">
                    <div className="navbar-start"> 
                        <Link to={'/'} className="btn btn-ghost normal-case text-xl italic">Thinking</Link>
                    </div>
                    <div className='navbar-end'>
                        <div className=" hidden lg:flex">
                            <div className='flex items-center'>
                                <input type="text" className='input input-bordered input-sm mr-2 bg-white' placeholder='text-here' />
                                <img className='w-10 h-10 rounded-full border-2 border-sky-400' src={User?.photoURL} alt="" />
                            </div>
                        </div>
                        <div className="dropdown">
                            <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                                <GiHamburgerMenu className='text-3xl'></GiHamburgerMenu>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;