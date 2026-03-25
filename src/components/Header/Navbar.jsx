import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { IoLogoGithub } from "react-icons/io";
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (
        <div className='shadow-sm'>

            <div className='flex justify-between items-center md:mx-20 mx-3 py-4'>

                <div className='flex items-center gap-4'>
                   
                    <span onClick={() => setOpen(!open)}>
                        <span className='md:hidden'>
                            {
                                open ? <IoClose /> : <GiHamburgerMenu />
                            }
                            <ul className={`absolute shadow-xl bg-base-100 rounded- p-4 ${open ? 'top-10' : '-top-40'} `}>
                                <li> <Link to='/'>Home</Link> </li>
                                <li> <Link to='/appsPage'>Apps</Link> </li>
                                <li> <Link to='/installationPage' >Installation</Link> </li>
                            </ul>
                        </span>
                    </span>

                    <Link to='/'>
                        <div className='flex items-center gap-1 '>
                            <img className=' md:w-10 w-5 md:h-10 h-5' src={logo} alt="" />
                            <h2 className='font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-sm md:text-base'>HERO.IO</h2>
                        </div>
                    </Link>
                </div>
                {/* navbar */}
                <div className='hidden md:flex'>
                    <NavLink to='/' className='mr-8'>Home</NavLink>
                    <NavLink to='/appsPage' className='mr-8'>Apps</NavLink>
                    <NavLink to='/installationPage' >Installation</NavLink>
                </div>

                <div>
                    <Link to="https://github.com/AlponaKhan">
                        <button className='flex gap-2 rounded-sm items-center text-white font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] md:p-3 p-2'>
                            <IoLogoGithub />
                            Contribute
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;