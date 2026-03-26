import React, { use, useState } from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const AppDetail = ({dataPromise}) => {
    const {id}= useParams();

    const [install, setInstall]= useState(false);

    const allApps = use(dataPromise);
    // console.log(allApps);

    const notify = () => toast("Installation Completed!");

    const oneApp = allApps.find(singleApp=> String(singleApp.id) === id);
    // console.log(oneApp);
    const {image,title,ratingAvg,downloads,description,companyName,reviews,size}= oneApp;
    return (
        <div>
            <div className='flex gap-10 pt-10 md:pt-20 pb-10 px-3 md:mx-20 border-b border-gray-300 '>
                <img src={image} alt="" />
                <div>
                    <h2 className='font-bold text-3xl'>{title}</h2>
                    <p className='text-xl text-[#627382] pb-7 border-b border-gray-300'>Developed by <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>
                        {companyName}
                    </span>
                    </p>
                    {/* download */}
                    <div className='flex gap-12  md:py-7'>
                        <div>
                            <img src={download} alt="" />
                            <p>Downloads</p>
                            <p className='font-extrabold text-4xl'>{downloads}</p>
                        </div>

                        <div>
                            <img src={rating} alt="" />
                            <p>Average Ratings</p>
                            <p className='font-extrabold text-4xl'>{ratingAvg}</p>
                        </div>

                        <div>
                            <img src={review} alt="" />
                            <p>Total Reviews</p>
                            <p className='font-extrabold text-4xl'>{reviews}</p>
                        </div>
                    </div>
                    <button disabled={install} onClick={()=>{setInstall(true); notify()}} className={`text-white font-semibold text-xl rounded-sm py-3 px-5 ${install ? 'bg-green-300 cursor-not-allowed': 'bg-[#00D390] cursor-pointer'}`}>{install? "Installed" : `Install Now (${size})`}</button>
                    <ToastContainer />

                </div>
            </div>
            {/* Ratings chart */}
            <div className='md:py-10 md:px-20'>
                <h2 className='font-semibold text-2xl'>Ratings</h2>
            </div>
        </div>
    );
};

export default AppDetail;