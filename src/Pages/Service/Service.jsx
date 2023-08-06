import React, { useEffect, useState } from 'react';
import Work from './Work';


const Service = () => {
    const [works, setWork] = useState([])
    useEffect(() =>{
        fetch("/cleanning.json")
        .then(res => res.json())
        .then(data => setWork(data))
    }, [])
    return (
        <div className="max-w-[1240px] mx-auto md:mt-14 mt-10 mb-20">
            <h1 className="text-center md:text-xl font-semibold">--- What we are offering ---</h1>
            <h1 className="text-center md:text-5xl text-3xl  mt-3 mb-10 md:font-bold font-extrabold">Our <span className="text-red-500">Rapid</span> Services</h1>
            <div className="grid md:grid-cols-3 gap-4 mt-5 px-3">
                {
                    works.map((singleWork, index) =>  <Work key={index} singleData={singleWork} />)
                }
            </div>
            <button className="bg-[#f3b160] hover:bg-[#d69c54] duration-300 block mx-auto mt-10 px-6 py-3 rounded-md text-xl text-white font-bold">See More</button>
        </div>
    );
};

export default Service;