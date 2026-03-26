import React, { use } from 'react';
import AppCard from '../AppsPage/AppCard';
import { Link } from 'react-router';

const TrendingApp = ({dataPromise}) => {
    const appData = use(dataPromise);
    const topApps = appData.slice(0,8);
    // console.log(topApps);
    return (
        <div>
            <h2 className='text-center font-bold text-5xl pt-20'>Trending Apps</h2>
            <p className='text-center text-xl text-[#627382] pt-4 pb-10 px-2'>Explore All Trending Apps on the Market developed by us</p>

            {/* app card */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:mx-20 px-3'>
                {
                  topApps.map(Tapp=><AppCard key={Tapp.id} Tapp={Tapp}></AppCard>)  
                }
            </div>
            
                <Link to='/appsPage'>
                    <div className='text-center'>
                        <button className='mt-10 mb-20 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-sm font-semibold py-3.5 px-9'>Show All</button>
                    </div>
                </Link>
        </div>
    );
};

export default TrendingApp;