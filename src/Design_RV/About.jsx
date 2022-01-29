import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../Images/about us.png';
import './Style.css';
import Common from './Common';
const About = () => {
    return (
        <>
           <Common title = {'Join Our Community To Build Your'} strong = {'Passion to Design'} desc ={'Developer communities are types of marketing channels where peer-to-peer conversations and authentic engagement are most likely to take place. At the core, this is a place where the vast majority of the audience shares common traits and interests.'} btn = {'Join Us'} img = {web}/>
        </>
    );
};

export default About;
