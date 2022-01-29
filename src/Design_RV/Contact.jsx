import React from 'react';
import contactimg from '../Images/contact.jpg';
import { NavLink } from 'react-router-dom';
import './Style.css';
const Contact = () => {
    return (
        <>
            <h2 className='heading text-center'>Connect With Us</h2>
            <div className="container">
                <div className="form-container">
                    <div className="main">
                        <form action autoComplete="off" onsubmit="return validation()">
                            <div className="form-component">
                                <label htmlFor>Full Name : </label>
                                <input type="text" name id="username" placeholder="Name" />

                            </div>
                            <div className="form-component">
                                <label htmlFor>Email : </label>
                                <input type="email" name id="email" placeholder="email" />

                            </div>
                            <div className="form-component">
                                <label htmlFor>Phone Number : </label>
                                <input type="tel" name id="phone-number" placeholder="Phone Number" />
                            </div>
                            <div className="form-component">
                                <label htmlFor>Write To Us : </label>
                                <textarea class="form-control" id="floatingTextarea2"></textarea>
                            </div>
                            <NavLink to="./" className='contact-btn'>Contact Us</NavLink>
                        </form>
                    </div>
                    <div >
                        <img src={contactimg} className='img-fluid animated' alt="Contact Us" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
