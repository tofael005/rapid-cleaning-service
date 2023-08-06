import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className="w-full bg-gray-200 mt-32">
            <div className='max-w-[1240px] mx-auto px-3 text-gray-700'>
                <section className="grid md:grid-cols-3 gap-8 mb-10 px-6">
                    <div className="mt-5">
                        <div>
                            <img className="w-36 mb-6 mt-2" src={logo} alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, ipsam beatae necessitatibus ex totam amet possimus repudiandae unde quaerat odio odit nulla a nobis quos deserunt aut repellat eveniet deleniti optio  perferendis</p>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-3xl mt-3 mb-2">About Us</h1>
                        <p><Link to="/">Home</Link></p>
                        <p className="my-2"><Link to="/service">Service</Link></p>
                        <p><Link to="/blog">Blog</Link></p>
                        <p className="my-2"><Link to="/about">About US</Link></p>
                        <p className="my-2"><Link to="/contact">Contact US</Link></p>
                    </div>
                    <div className="mt-5">
                        <p className="text-3xl my-3">Contact Us</p>
                        <p>Office Address: Central Australia</p>
                        <p className="my-2">Cell: +123 456 6789</p>
                        <div className="md:w-full">
                            <input className="p-3 rounded border-bg-[#f3b160] border" type="email" name="email" placeholder="Email" />
                            <button className="bg-[#f3b160] ml-2 p-3 rounded text-white">Submit</button>
                        </div>
                    </div>
                </section>
                <div className=" border-1">
                    <hr />
                </div>
                <div className="text-center mt-10">
                    <div className="flex gap-3 text-xl justify-center">
                        <div className='text-blue-500 cursor-pointer'>
                            <Link><BsFacebook /></Link>
                        </div>
                        <div className='text-blue-400 cursor-pointer'>
                            <Link><BsLinkedin /></Link>
                        </div>
                        <div className='text-sky-500 cursor-pointer'>
                            <Link><BsTwitter /></Link>
                        </div>
                        <div className="text-red-500 cursor-pointer">
                            <Link><BsInstagram /></Link>
                        </div>
                    </div>
                    <h1 className="p-6">&copy;copyright 2023 All rights reserved by <span className="text-red-500 font-bold">RAPID</span> Hydrovac</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;