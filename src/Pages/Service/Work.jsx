import React from 'react';

const Work = ({singleData}) => {
    const {image, title, description} = singleData;
    return (
        <div>
            <div className="p-3 border rounded-md shadow-md">
                <img className="w-full rounded-md h-[300px]" src={image} alt="" />
                <h1 className="mt-6 mb-3 text-2xl font-bold">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Work;