import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css';
const Navbar = () => {
  return(

      <>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">RV-Design</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <NavLink activeClassName = "menu_active" className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName = "menu_active" className="nav-link " aria-current="page" to="/service">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName = "menu_active" className="nav-link" aria-current="page" to="/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName = "menu_active" className="nav-link" aria-current="page" to="/about">About Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
      </>
  );
};

export default Navbar;
