import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Header/Navbar';
import Footer from '../Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-gray-100'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;