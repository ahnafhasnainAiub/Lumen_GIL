import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LUMEN.png';
import GIL_logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <div className="">
        <footer className="footer p-10 bg-base-100 text-base-content justify-between items-center">

          <nav>
            <aside>
              <div className="">
                <img className="w-28 h-24" src={logo} alt="" />
              </div>
              <p>Your Location<br />Dhaka, Bangladesh</p>
            </aside>
          </nav>


          <nav>
            <header style={{ color: "#00A950" }} className="footer-title font-semibold">Company</header>
            <Link to="/about-us" className="">About us</Link>
            <Link to="/about-us" className="">Our ADVANTAGE</Link>
            <Link to="/about-us" className="">Products</Link>
            <Link to="/about-us" className="">SUSTAINABILITY</Link>
            <Link to="/contact" className="">Contact</Link>
          </nav>

          <nav>
            <header style={{ color: "#00A950" }} className="footer-title font-semibold">Website Developed by</header>
            <Link target='_blank' to='http://goinnovior.com/'>
              <img className='w-48' src={GIL_logo} alt="" srcset="" />
            </Link>
          </nav>

        </footer>
      </div>
    </div>
  );
}

export default Footer;
