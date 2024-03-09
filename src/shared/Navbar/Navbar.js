import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/LUMEN.png';

// Reusable dropdown component
const Dropdown = ({ label, items }) => (
    <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {items.map((item, index) => (
                <li key={index}>
                    <NavLink to={item.NavLink}>{item.label}</NavLink>
                </li>
            ))}
        </ul>
    </div>
);

const Navbar = () => {
    const menuItems = [
        { label: 'Home', NavLink: '/home' },
        {
            label: 'About', NavLink: '/about-us',
            // items: [
            //     { label: 'About Us', NavLink: '/about-us' },
            //     { label: 'Philosophy', NavLink: '/philosophy' },
            // ],
        },
        { label: 'Certificate', NavLink: '/certificate' },
        { label: 'Contact Us', NavLink: '/contact-us' },
    ];

    return (
        <div className="navbar w-10/12 mx-auto z-10 bg-base-100 rounded-3xl px-5">
            <div className="navbar-start">
                <Dropdown label="Menu" items={menuItems} />

                <div className="">
                    <NavLink to="/">
                        <img className="w-28 h-24" src={logo} alt="" />
                    </NavLink>
                </div>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.NavLink}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
