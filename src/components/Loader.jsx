import React from 'react';
import logo from '../assets/logo.png';

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10 md:py-20'>
            <p className='text-3xl md:text-8xl font-bold flex flex-row items-center text-[#627382]'>L<span><img src={logo} className='animate-spin w-20 h-20' alt="" /></span>oading</p>   
        </div>
    );
};

export default Loader;