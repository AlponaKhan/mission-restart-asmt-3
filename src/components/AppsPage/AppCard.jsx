import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';


const AppCard = ({Tapp}) => {
    const {image,title,downloads,ratingAvg}= Tapp;
    return (
        <div className='bg-white rounded-sm  p-4 flex flex-col h-full'>
            <img src={image} className='rounded-lg h-48 w-full object-cover' alt="" />
            <h4 className='text-xl font-medium pt-2'>{title}</h4>
            <div className='flex justify-between items-center pt-4 mt-auto'>
                <button className='text-[#00D390] font-medium flex gap-1 items-center bg-[#F1F5E8] rounded-sm px-2'>
                    <img src={download} className='w-4 h-4' alt="" />
                    {downloads}</button>

                <button className='text-[#FF8811] font-medium flex gap-1 items-center bg-[#FFF0E1] rounded-sm px-2'>
                    <img src={rating}  className='w-4 h-4' alt="" />
                    {ratingAvg}</button>
            </div>
        </div>
    );
};

export default AppCard;