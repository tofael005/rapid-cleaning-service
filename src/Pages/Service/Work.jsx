import React from 'react';

const Work = ({singleData}) => {
    const {image, title, description} = singleData;
    return (
        <div>
            <div>
                <img className="w-full h-[300px]" src={image} alt="" />
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Work;