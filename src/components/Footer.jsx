import React from 'react';
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <div>
            <div className='bg-black md:p-20 pt-20 pb-8 px-6 py-10'>
                <div className='grid  grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-500 pb-14 md:px-4'>
                    <div >
                        <h2 className='text-2xl font-bold text-white pb-4 flex gap-1 items-center'>
                            <img src={logo} className='w-10 h-10' alt="" />
                            About HERO.IO</h2>
                        <p className='text-gray-400 text-sm'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    </div>
                    
                    <div>
                        <h6 className="text-xl font-medium text-white pb-4">Company</h6>
                        <ul>
                            <li className='pb-4'><a className=" text-gray-400 ">About Us</a></li>
                            <li className='pb-4'><a className=" text-gray-400">Our Mission</a></li>
                            <li><a className=" text-gray-400">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h6 className="text-xl font-medium text-white pb-4">Information</h6>
                        <ul>
                            <li className='pb-4'><a className=" text-gray-400">Privacy Policy</a></li>
                            <li className='pb-4'><a className=" text-gray-400">Terms & Conditions</a></li>
                            <li><a className=" text-gray-400">Join Us</a></li>
                        </ul>
                    </div>
                   
                    <div>
                        <h6 className="text-xl font-medium text-white pb-4">Follow Us</h6>
                      <div className='flex gap-4'>
                        <Link to='https://www.facebook.com/' className='text-white'> <FaFacebook /> </Link>

                        <Link to='https://www.instagram.com/' className='text-white'> <FaSquareInstagram /> </Link>

                        <Link to='https://www.linkedin.com/' className='text-white'> <FaLinkedin /> </Link>
                        <Link to='https://www.youtube.com/' className='text-white'> <FaYoutube /> </Link>
                      </div>

                    </div>
                </div>
                {/* all reserved */}
                <div>
                    <p className='text-white text-center pt-8'> Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;