import React from 'react';
import { Link } from 'react-router';
import playstore from '../../assets/playtore.png';
import appStore from '../../assets/appStore.png';
import hero from '../../assets/hero.png';

const Banner = () => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl md:text-5xl font-bold pt-10 md:pt-20'>We Build <br /> <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h2>
            <p className='pt-4 text-[#627382] px-3'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex gap-4 items-center justify-center py-10'>
                <Link to="https://play.google.com/store/games" target='_blank'>
                    <button className='btn font-semibold text-xl'>
                        <img src={playstore} className='w-6 h-6' alt="" />
                        Google Play
                    </button>
                </Link>
                <Link to="https://www.apple.com/app-store/" target='_blank'>
                    <button className='btn font-semibold text-xl'>
                        <img src={appStore} className='w-6 h-6' alt="" />
                        App Store
                    </button>
                </Link>
            </div>
            <div className='flex justify-center mx-3'>
                <img src={hero} alt="" />
            </div>
        </div>
    );
};

export default Banner;