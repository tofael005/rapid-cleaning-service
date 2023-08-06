import React from 'react';
import Banner from '../../Header/Banner';
import Vision from '../Vision/Vision';
import Service from '../Service/Service';
import About from '../About/About';
import Why from '../Why/Why';
import Testimonial from '../Testimonial/Testimonial';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Vision />
            <Service />
            <Why />
            <Testimonial />
           <Blogs />
        </div>
    );
};

export default Home;