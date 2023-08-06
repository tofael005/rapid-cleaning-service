import React from 'react';

const CardBlog = ({blogData}) => {
    const {image, title, description} = blogData;
    return (
        <div className="border">
            <img className="w-full h-[300px]" src={image} alt="" />
            <h1 className="text-center my-3 font-bold text-xl">{title}</h1>
            <p>{description}</p>
            <button className="my-4 block mx-auto bg-[#f3b160] w-full p-3 font-bold text-white">More Details</button>
        </div>
    );
};

export default CardBlog;