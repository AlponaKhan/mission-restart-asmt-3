import React, { use, useState } from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import RatingChart from './RatingChart';
import AppError from '../ErrorPages/AppError';

const AppDetail = ({ dataPromise }) => {
    const { id } = useParams();

    const [install, setInstall] = useState(false);

    const allApps = use(dataPromise);
    // console.log(allApps);

    const notify = () => toast("Installation Completed!");

    const oneApp = allApps.find(singleApp => String(singleApp.id) === id);
    // console.log(oneApp);

    if(!oneApp){
        return <AppError></AppError>
    }
    const { image, title, ratingAvg, downloads, description, companyName, reviews, size, ratings } = oneApp;

    const para= description.split('\n\n').filter(p => p.trim() !== "");
    return (
        <div>
            <div className='flex flex-col md:flex-row md:gap-10 pt-10 md:pt-20 pb-10 w-fit mx-auto md:mx-20 md:w-auto px-3'>
                <img src={image} className='w-32 h-32 md:w-auto md:h-auto mx-auto md:mx-0' alt="" />
                <div className='flex-1 text-center md:text-left'>
                    <h2 className='font-bold text-xl md:text-3xl'>{title}</h2>
                    <p className='md:text-xl text-[#627382] pb-7 border-b border-gray-300 w-fit mx-auto md:w-full md:mx-0'>Developed by <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>
                        {companyName}
                    </span>
                    </p>
                    {/* download */}
                    <div className='md:flex md:gap-12  md:py-7'>
                        <div className='py-10 md:py-0 flex flex-col items-center md:items-start w-fit mx-auto md:mx-0'>
                            <img src={download} alt="" />
                            <p>Downloads</p>
                            <p className='font-extrabold text-4xl'>{downloads}</p>
                        </div>

                        <div className='flex flex-col items-center md:items-start w-fit mx-auto md:mx-0'>
                            <img src={rating} alt="" />
                            <p>Average Ratings</p>
                            <p className='font-extrabold text-4xl'>{ratingAvg}</p>
                        </div>

                        <div className='py-10 md:py-0 flex flex-col items-center md:items-start w-fit mx-auto md:mx-0'>
                            <img src={review} alt="" />
                            <p>Total Reviews</p>
                            <p className='font-extrabold text-4xl'>{reviews}</p>
                        </div>
                    </div>
                    <button disabled={install} onClick={() => { setInstall(true); notify() }} className={`text-white font-semibold md:text-xl rounded-sm py-3 px-2 md:px-5 ${install ? 'bg-green-300 cursor-not-allowed' : 'bg-[#00D390] cursor-pointer'}`}>{install ? "Installed" : `Install Now (${size})`}</button>
                    <ToastContainer />

                </div>
                <div className='w-1/2 mx-auto border-b border-gray-300 mt-10 md:hidden'></div>
            </div>
            <div className='hidden md:block border-b border-gray-300 mx-20'></div>
            {/* Ratings chart */}
            <div className='py-4 md:pt-10 md:px-20 w-fit mx-auto md:mx-0'>
                <h2 className='font-semibold text-2xl'>Ratings</h2>
            </div>
            <div className='flex flex-col md:auto h-96'>
                <RatingChart rating={ratings}></RatingChart>
            </div>
            {/* description */}
            <div className='md:px-20 md:pb-20 md:pt-5  '>
                <h2 className='pb-6 font-semibold text-2xl border-t border-gray-300 pt-10 w-fit mx-auto md:w-auto'>Description</h2>
                {
                    para.map((singlePara,index)=> <p key={index} className='text-[#627382] md:text-xl pb-14'>{singlePara}</p>)
                }
            </div>
        </div>
    );
};

export default AppDetail;