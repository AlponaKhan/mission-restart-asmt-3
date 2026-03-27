import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';

const InstallCard = ({installSingleApp, handleRemove}) => {

    const {image,title,downloads,ratingAvg,size,id}= installSingleApp;
    return (
        <div className='px-10 md:px-20 pb-4'>
            <div className='flex justify-between items-center bg-white rounded-sm'>
                <div className='flex gap-3 items-center'>
                    <img src={image} className=' py-4 pl-4 h-32 w-32 rounded-sm' alt="" />
                    <div>
                        <h2 className='font-medium text-xl pb-4'>{title}</h2>
                        <div className='flex items-center gap-4'>
                            <p className='font-medium text-[#00D390] flex gap-1 items-center'>
                                <img src={download} className='w-4 h-4' alt="" />
                                {downloads}</p>
                            
                             <p className='font-medium text-[#FF8811] flex gap-1 items-center'>
                                <img src={rating} className='w-4 h-4' alt="" />
                                {ratingAvg}</p>

                            <p className='text-[#627382]'>{size}</p>
                        </div>
                    </div>
                </div>
                <div className='pr-4'>
                    <button onClick={()=>handleRemove(id)} className={`text-white font-semibold rounded-sm py-3 px-2 md:px-4 bg-[#00D390]`}>Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstallCard;