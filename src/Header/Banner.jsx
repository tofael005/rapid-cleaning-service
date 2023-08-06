import React from 'react';
import banner from "../assets/banner2.webp"

const Banner = () => {
    return (
        <div className="mt-8">
            <div className="relative">
                <img className="object-cover md:w-full md:h-[90vh]" src={banner} alt="" />
            </div>
            <div className="absolute md:top-[97px] left-0 bg-[#2e2d2c3d] md:w-full md:h-[90vh] w-full h-[188px]  bottom-0 top-[87px]">
                <h1 className="text-center md:mt-56 md:text-xl mt-10  text-white">--- We Clean whole lot more! ---</h1>
                <p className="text-center md:text-6xl text-3xl mb-4 font-bold md:mt-4 text-white">Services In Your Town</p>
                <button className="md:mt-20 md:px-8 md:py-5 p-3 rounded-md text-white bg-[#f3b160] block mx-auto md:text-xl font-bold hover:bg-[#d69c54] duration-300">Book NOW!</button>
            </div>
        </div>
    );
};

export default Banner;
