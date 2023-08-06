import React from 'react';
import Banner from '../../Header/Banner';
import Vision from '../Vision/Vision';
import Service from '../Service/Service';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <Vision />
            <About />
        </div>
    );
};

export default Home;