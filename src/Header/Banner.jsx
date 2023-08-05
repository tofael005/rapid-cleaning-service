import React from 'react';
import banner from "../assets/banner2.jpg"

const Banner = () => {
    return (
        <div className="mt-8">
            <div className="relative">
                <img className="object-cover w-full h-[90vh]" src={banner} alt="" />
            </div>
            <div className="absolute top-[106px] left-0 bg-[#03203c5e] w-full -bottom-3">
                <h1 className="text-center mt-48 text-xl text-white">--- We Clean whole lot more! ---</h1>
                <p className="text-center text-6xl font-bold mt-10 text-white">Services In Your Town</p>
                <button className="mt-20 px-8 py-5 rounded-md text-white bg-[#23C4ED] block mx-auto text-xl font-bold hover:bg-[#4adbffbe] duration-300">Book NOW!</button>
            </div>
        </div>
    );
};

export default Banner;