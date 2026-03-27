import React from 'react';
import errorPageImg from '../../assets/error-404.png';
import { Link, useNavigate } from 'react-router';

const PageError = () => {

    const navigate = useNavigate();
    
    return (
        <div className='text-center'>
            <div className='flex justify-center items-center pt-10 md:pt-20'>
                <img src={errorPageImg} alt="" />
            </div>
            <h2 className='font-semibold text-2xl md:text-5xl pb-4 pt-8'>Oops, page not found!</h2>
            <p className='md:text-xl text-[#627382]'>The page you are looking for is not available.</p>
            <div className='text-center'>
                <button onClick={()=> navigate(-1)} className='mt-10 mb-20 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-sm font-semibold py-3.5 px-9'>Go Back!</button>
            </div>
        </div>
    );
};

export default PageError;