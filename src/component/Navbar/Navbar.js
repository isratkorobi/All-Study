import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
      // start menubar
        <div className="MenuBar-container bg-light ">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="logo-img">
                <img className="img" src={logo} alt="" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="menu-container ">
                <ul className="d-flex align-items-end justify-content-end">
                  <Link to="/home" className="items">
                    <li>Home</li>
                  </Link>
                  <Link to="/service" className="items">
                    <li>Service</li>
                  </Link>
                  <Link to="/about" className="items">
                    <li>About us</li>
                  </Link>
                  <Link to="contact" className="items">
                    <li>Contact us</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;