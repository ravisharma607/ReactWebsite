import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
        
            <div className="container">
                <div id="header">
                    <div className="col-m-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h2>{props.title} <strong>{props.strong}</strong> </h2>
                        <h3 className="my-2">{props.desc}</h3>
                        <div className="mt-3">
                            <NavLink to="./service" className='btn-get-started'>{props.btn}</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 ml-3">
                        <img src={props.img} alt="Welcome" className='img-fluid animated' />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Common;
