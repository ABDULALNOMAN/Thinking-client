import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Drawer from '../Shared/Drawer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Drawer></Drawer>
            <Footer></Footer>
        </div>
    );
};

export default Main;