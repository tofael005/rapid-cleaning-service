import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
    const [toggle, setToggle] = useState([])
    return (
        <div className="max-w-[1240px] mx-auto px-3 mt-4">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-[150px]" src={logo} alt="" />
                </div>


                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineClose className='text-2xl' onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                    }
                </span>

                <ul  className={`flex items-center duration-300 flex-col py-5 md:p-0 text-white md:text-gray-900 bg-opacity-90 top-20 bg-black md:bg-transparent w-full text-center md:w-auto md:flex-row gap-3 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Service</NavLink>
                    </li>
                    <li>
                        <NavLink>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink>Contact Us</NavLink>
                    </li>
                    <button className="bg-[#23C4ED] text-white hover:bg-[#4adbffbe] duration-300 p-3 rounded-md">Request A Quote</button>
                </ul>
            </div>
           
        </div>
    );
};

export default NavBar;