import React from 'react';

const CardBanner = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
                <h2 className=' py-8 md:pt-20 text-white font-bold text-4xl text-center'>Trusted by Millions, Built for You</h2>
                <div className='md:pt-10 pb-8 md:pb-20  flex justify-center gap-12'>
                    <div className='text-center'>
                        <p className='text-xs text-white'>Total Downloads</p>
                        <h2 className='text-white font-extrabold text-4xl md:text-6xl py-2 md:py-4'>29.6M</h2>
                        <p className='text-xs text-white'>21% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-xs text-white'>Total Reviews</p>
                        <h2 className='text-white font-extrabold text-4xl md:text-6xl py-2 md:py-4'>906K</h2>
                        <p className='text-xs text-white'>46% more than last month</p>
                    </div>
                     <div className='text-center'>
                        <p className='text-xs text-white'>Active Apps</p>
                        <h2 className='text-white font-extrabold text-4xl md:text-6xl py-2 md:py-4'>132+</h2>
                        <p className='text-xs text-white'>31 more will Launch</p>
                    </div>

                </div>

            </div>
    );
};

export default CardBanner;