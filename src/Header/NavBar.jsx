import React from 'react';
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-3">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-[150px]" src={logo} alt="" />
                </div>


                <ul className="flex items-center gap-8 font-bold">
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
                    <button>Request A Quote</button>
                </ul>
            </div>
           
        </div>
    );
};

export default NavBar;