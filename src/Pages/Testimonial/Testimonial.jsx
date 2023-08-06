import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import tes from "../../assets/review/tes.jpg"
import tes2 from "../../assets/review/tes5.jpg"
import tes3 from "../../assets/review/tes2.jpg"
import tes4 from "../../assets/review/tes4.jpg"
import tes5 from "../../assets/review/tes3.jpg"

const Testimonial = () => {
    return (
        <div className="mt-20">
            <h1 className="text-center text-4xl font-bold my-6">Testimonial</h1>
            <div className="">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-4 px-3 border-b pb-4">
                    <div className="border p-3 shadow-md">
                        <img className="w-48 h-[150px] rounded block mx-auto" src={tes} alt="" />
                        <div>
                            <h1 className="text-xl text-center font-bold my-3">John Kyils</h1>
                            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            <div className="flex items-center justify-center gap-2 my-3 text-orange-500">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>
                    </div>
                    <div className="border p-3 shadow-md">
                        <img className="w-48 h-[150px] rounded block mx-auto" src={tes2} alt="" />
                        <div>
                            <h1 className="text-xl text-center font-bold my-3">Marina Costa</h1>
                            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            <div className="flex items-center justify-center gap-2 my-3 text-orange-500">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                            </div>
                        </div>
                    </div>
                    <div className="border p-3 shadow-md">
                        <img className="w-48 h-[150px] rounded block mx-auto" src={tes3} alt="" />
                        <div>
                            <h1 className="text-xl text-center font-bold my-3">Aling Thomas</h1>
                            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            <div className="flex items-center justify-center gap-2 my-3 text-orange-500">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>
                    </div>
                    <div className="border p-3 shadow-md">
                        <img className="w-48 h-[150px] rounded block mx-auto" src={tes4} alt="" />
                        <div>
                            <h1 className="text-xl text-center font-bold my-3">Linda Burry</h1>
                            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            <div className="flex items-center justify-center gap-2 my-3 text-orange-500">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>
                    </div>
                    <div className="border p-3 shadow-md">
                        <img className="w-48 h-[150px] rounded block mx-auto" src={tes5} alt="" />
                        <div>
                            <h1 className="text-xl text-center font-bold my-3">Shams Alam</h1>
                            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            <div className="flex items-center justify-center gap-2 my-3 text-orange-500">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;