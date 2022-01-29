import React from 'react';
import Service from './Service';
import './Style.css';
import { NavLink } from 'react-router-dom';
const ServiceDisplay = (props) => {
    return (
        <>
            <div className="services">
                <div className="service-1">
                        <h2>{props.title} </h2>
                        <h4 >{props.desc}</h4>
                            <NavLink to="/contact" className='service-started'>Get Started</NavLink>
                    </div>
                       <div className="image">
                       <img src={props.img} alt="Welcome" className='img-fluid animated' />
                       </div>
            </div>
                       <hr />
        </>
    );
};

export default ServiceDisplay;
