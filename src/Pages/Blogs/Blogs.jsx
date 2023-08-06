import React, { useEffect, useState } from 'react';
import CardBlog from './CardBlog';


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch("/blog.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="max-w-[1240px] mx-auto mt-20">
            <h1 className="text-center text-4xl font-bold my-7"><span className="text-red-500">Our</span> Latest Blogs</h1>
            <div className="grid md:grid-cols-3 px-3 gap-3">
                {
                    blogs.map((blogCard, index) => <CardBlog key={index} blogData={blogCard} />)
                }
            </div>
        </div>
    );
};

export default Blogs;