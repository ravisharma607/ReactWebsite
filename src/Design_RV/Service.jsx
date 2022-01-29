import React from 'react';
import ServiceAPI from './ServiceAPI';
import ServiceDisplay from './ServiceDisplay';
import './Style.css';
const Service = () => {
    return (
        <>
         <h2 className="text-center heading">Our Services</h2>
        {
            ServiceAPI.map((val,ind) =>{
                return <ServiceDisplay key = {ind} img = {val.img} title = {val.title}  desc = {val.desc} />
            })
        }
            
        </>
    );
};

export default Service;
