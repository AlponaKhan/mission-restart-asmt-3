import React from 'react';
import { useNavigate } from 'react-router';
import appErrorImg from '../../assets/App-Error.png';

const AppError = () => {

    const navigate= useNavigate();
    return (
         <div className='text-center'>
                    <div className='flex justify-center items-center pt-10 md:pt-20'>
                        <img src={appErrorImg} alt="" />
                    </div>
                    <h2 className='font-semibold text-2xl md:text-5xl pb-4 pt-8'>Oops!! APP NOT FOUND</h2>
                    <p className='md:text-xl text-[#627382]'>The App you are requesting is not found on our system.  please try another apps.</p>
                    <div className='text-center'>
                        <button onClick={()=> navigate(-1)} className='mt-10 mb-20 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-sm font-semibold py-3.5 px-9'>Go Back!</button>
                    </div>
                </div>
    );
};

export default AppError;