import React from 'react';
import icon1 from "../../assets/icon/icon1.png"
import icon2 from "../../assets/icon/icon2.png"
import icon3 from "../../assets/icon/icon3.png"
import icon4 from "../../assets/icon/icon4.png"

const Vision = () => {
    return (
        <div className="bg-[#23C4ED] mt-10">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 py-20 items-center">
                <div className="mb-6 md:mb-0">
                    <img className="w-[100px] mx-auto" src={icon1} alt="" />
                    <h1 className="text-center mt-6 text-xl font-bold text-white">8 Years Experience</h1>
                </div>
                <div className="mb-6 md:mb-0">
                    <img className="w-[100px] mx-auto" src={icon2} alt="" />
                    <h1 className="text-center mt-6 text-xl font-bold text-white">Insured & Bonded</h1>
                </div>
                <div className="mb-6 md:mb-0">
                    <img className="w-[100px] mx-auto" src={icon3} alt="" />
                    <h1 className="text-center mt-6 text-xl font-bold text-white">100% Free Estimates</h1>
                </div>
                <div className="mb-6 md:mb-0">
                    <img className="w-[100px] mx-auto" src={icon4} alt="" />
                    <h1 className="text-center mt-6 text-xl font-bold text-white">Quality Standards</h1>
                </div>
            </div>
        </div>
    );
};

export default Vision;