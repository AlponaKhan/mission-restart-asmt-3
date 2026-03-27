import React, { use, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import AppCard from './AppCard';
import { Link } from 'react-router';
import Loader from '../Loader';

const AppsPage = ({ dataPromise }) => {
    const appData = use(dataPromise);
    // console.log(appData);
    const [searchApp, setSearchApp] = useState("");
    const [isSearching, setIsSearching]= useState(false);

    const filteredApp = appData.filter(singleApp => singleApp.title.toLowerCase().includes(searchApp.toLowerCase()));

    const handleSearch =(e)=>{
        const value = e.target.value;
        setSearchApp(value);
        setIsSearching(true);

        setTimeout(()=>{
            setIsSearching(false);
        },400);
    }

    return (
        <div>
            <h2 className='text-center font-bold text-3xl md:text-5xl pt-10 md:pt-20 pb-4'>Our All Applications</h2>
            <p className='md:text-xl text-[#627382] pb-10 text-center px-3'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='md:flex items-center justify-between pb-4 md:mx-20'>
                <p className='font-semibold text-xl md:text-2xl px-3 mb-4 md:mb-0'><span>({appData.length})</span> Apps Found</p>
                <div className='relative px-3 w-full md:w-auto'>
                    <span className='absolute top-3 flex items-center px-2 md:px-4 text-[#627382]'>
                        <CiSearch />
                    </span>
                    <input type="text" value={searchApp} onChange={handleSearch} placeholder='Search Apps' className='text-[#627382] px-6 md:px-8 py-2 border rounded-sm shadow-xs border-gray-200 w-full outline-none' />
                </div>
            </div>
            {/* card */}
           <div>
            {
                isSearching ? <Loader></Loader>: (
                     <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:mx-20 px-3 pb-10 md:pb-20'>
                {
                    filteredApp.length > 0 ? (filteredApp.map(singleApp => <AppCard key={singleApp.id} Tapp={singleApp}></AppCard>)) :
                        <div className='text-center md:col-span-4'>
                            <p className='font-semibold text-2xl md:text-5xl pb-4 pt-8'>No App Found</p>
                            <Link to='/appsPage'>
                                <div className='text-center'>
                                    <button onClick={()=> setSearchApp('')} className='mt-10 mb-20 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-sm font-semibold py-3.5 px-9'>Show All</button>
                                </div>
                            </Link>
                        </div>
                }
            </div>
                )
            }
           </div>
        </div>
    );
};

export default AppsPage;