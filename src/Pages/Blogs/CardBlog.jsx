import React from 'react';
import { Link } from 'react-router-dom';

const CardBlog = ({blogData}) => {
    const {image, title, description} = blogData;
    return (
        <div className="border p-3">
            <img className="w-full h-[300px]" src={image} alt="" />
            <h1 className="text-center my-3 font-bold text-xl">{title}</h1>
            <p>{description}</p>
            <Link to="/viewDetails"><button className="mt-3 block mx-auto bg-[#f3b160] w-full p-3 font-bold text-xl text-white">More Details</button></Link>
        </div>
    );
};

export default CardBlog;