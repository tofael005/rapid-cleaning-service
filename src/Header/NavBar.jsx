import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="max-w-[1240px] mx-auto px-3 mt-4">
            <div className="flex justify-between items-center">
                <div>
                   <Link to="/"> <img className="w-[150px]" src={logo} alt="" /></Link>
                </div>


                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineClose className='text-2xl' onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                    }
                </span>

                <ul  className={`flex items-center duration-300 flex-col py-5 md:p-0 text-white md:text-gray-900 bg-opacity-90 top-20 bg-black md:bg-transparent w-full text-center md:w-auto md:flex-row gap-6 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink className="font-bold">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service" className="font-bold">Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className="font-bold">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="font-bold">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="font-bold">Contact Us</NavLink>
                    </li>
                    <Link to="/booked"><button className="bg-[#f3b160] text-white text-xl font-bold hover:bg-[#d69c54] duration-300 p-3 rounded">Request A Quote</button></Link>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;