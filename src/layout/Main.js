import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import NavbarHeader from '../shared/Navbar/NavbarHeader';
import Headroom from 'react-headroom';

const Main = () => {
    return (
        <div>
            <NavbarHeader />
            <Headroom style={{
                webkitTransition: 'background-color 0.5s ease-in-out',
                mozTransition: 'background-color 0.5s ease-in-out',
                oTransition: 'background-color 0.5s ease-in-out',
                transition: 'background-color 0.5s ease-in-out',

            }}>
                <Navbar className='z-50' />
            </Headroom>
            <Outlet className="z-10" />
            <Footer />
        </div>
    );
};

export default Main;
