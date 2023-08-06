import React from 'react';
import about from "../../assets/about.jpg"
import { BiSupport } from 'react-icons/bi';

const About = () => {
    return (
        <div className="mt-14 max-w-[1240px] mx-auto border-b py-4 mb-10">
            <h1 className="md:text-5xl text-3xl text-center text-[#23C4ED] font-bold">About US!</h1>

            <div className="grid md:grid-cols-2 gap-6 px-3 md:mt-16 mt-8">
                <img className="rounded-md" src={about} alt="" />
                <div>
                    <h1 className="md:text-5xl font-extrabold text-4xl text-red-500 md:mb-6 mb-3 md:mt-4">RAPID <span className="text-black font-normal">HYDROVAC</span></h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, expedita? Unde enim quasi, accusantium blanditiis qui perferendis sint modi, praesentium quibusdam repudiandae suscipit officia nisi iusto eius exercitationem facere quos rerum nobis dolorem distinctio minus? Quibusdam suscipit quisquam, dolores ad aut iste ipsum adipisci ratione animi, commodi fuga nisi quos dolorum aliquid, excepturi accusantium autem necessitatibus tenetur! Maxime iste excepturi esse doloribus. Qui nisi atque, iure nulla aut adipisci deserunt doloribus obcaecati non saepe perferendis maxime, assumenda dicta nemo culpa accusantium ab corrupti nesciunt, dolores eaque ut quae quos dolor velit? Saepe qui voluptas facilis placeat quasi quibusdam odio repellat facilis placeat quasi quibusdam odio repellat perferendis maxime, assumenda dicta nemo culpa accusantium ab corrupti nesciunt, dolores eaque ut quae quos dolor velit? Saepe qui voluptas facilis placeat voluptas facilis placeat quasi quibusdam odio repellat facilis placeat quasi placeat quasi.</p>
                    <div className="w-full bg-[#23C4ED] mt-6 flex gap-4 items-center md:p-10 p-4 font-extrabold">
                        <BiSupport className="text-6xl font-extrabold text-red-500" />
                        <p className="text-white md:text-5xl text-3xl">: +123 456 6789</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;