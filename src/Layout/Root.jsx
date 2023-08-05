import React from 'react';
import NavBar from '../Header/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;