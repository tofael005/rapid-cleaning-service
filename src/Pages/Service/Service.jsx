import React, { useEffect, useState } from 'react';
import Work from './Work';
import { key } from 'localforage';

const Service = () => {
    const [works, setWork] = useState([])
    useEffect(() =>{
        fetch("/cleanning.json")
        .then(res => res.json())
        .then(data => setWork(data))
    }, [])
    return (
        <div className="max-w-[1240px] mx-auto mt-24">
            <h1 className="text-center text-xl font-semibold">--- What we are offering ---</h1>
            <h1 className="text-center text-6xl mt-3 mb-10 font-bold">Our Cleaning Services</h1>
            <div className="grid md:grid-cols-3 gap-4 mt-5">
                {
                    works.map((singleWork, index) =>  <Work key={index} singleData={singleWork} />)
                }
            </div>
        </div>
    );
};

export default Service;