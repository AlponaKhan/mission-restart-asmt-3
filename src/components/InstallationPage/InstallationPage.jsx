import React, { use, useEffect, useState } from 'react';
import icon from '../../assets/teenyicons_down-solid.png';
import InstallCard from './InstallCard';
import { ToastContainer, toast } from 'react-toastify';

const InstallationPage = ({dataPromise}) => {
    const notify = () => toast("Successfully Uninstall!");

    const allApp= use(dataPromise);
    // console.log(allApp);

    const [installedIds, setInstalledIds]= useState([]);
const [sortApps, setSortApps]= useState('');

    useEffect(()=>{
        const appsId= localStorage.getItem('Apps');
        if(appsId){
            setInstalledIds(JSON.parse(appsId));
        }
    },[]);


    const handleRemove=(idRemove)=>{
        notify();
        const updatedIds = installedIds.filter(id=> id !== idRemove);

        localStorage.setItem('Apps', JSON.stringify(updatedIds));

        setInstalledIds(updatedIds);
    }

    let theApp= allApp.filter(app=> installedIds.includes(app.id));
    // console.log(theApp);

    if(sortApps === 'High-Low'){
        theApp =[...theApp].sort((a,b)=>{
            return parseFloat(b.downloads)- parseFloat(a.downloads);
        })
    }
    else if(sortApps === 'Low-High'){
        theApp =[...theApp].sort((a,b)=>{
            return parseFloat(a.downloads)- parseFloat(b.downloads);
        })
    }
    return (
        <div>
            <h2 className='text-center font-bold text-3xl md:text-5xl pt-10 md:pt-20 pb-4'>Your Installed Apps</h2>
            <p className='md:text-xl text-[#627382] pb-10 text-center px-3'>Explore All Trending Apps on the Market developed by us</p>
            <div className='md:flex items-center justify-between pb-4 md:mx-20'>
                <p className='font-semibold text-xl md:text-2xl px-3 mb-4 md:mb-0'><span>{theApp.length}</span> Apps Found</p>
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1 text-[#627382]">Sort By Size <img src={icon} alt="" /> </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm">
                        <li><a onClick={()=> setSortApps('High-Low')}>High-Low</a></li>
                        <li><a onClick={()=> setSortApps('Low-High')}>Low-High</a></li>
                    </ul>
                </div>
            </div>
            <ToastContainer></ToastContainer>
            {/* Install Card */}
            <div className='pb-10 md:pb-20'>
                {
                    theApp.map(installSingleApp => <InstallCard key={installSingleApp.id} installSingleApp={installSingleApp} handleRemove={handleRemove}></InstallCard>)
                }
            </div>
        </div>
    );
};

export default InstallationPage;