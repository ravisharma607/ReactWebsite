import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../Images/hero-bg.png';
import Common from './Common';
import './Style.css';
const Home = () => {
    return (
        <>
           <Common title = {'Grow With Your Passion To'} strong = {'Design'} desc ={'We are here to create awesome UI designs to make better user experience.The goal of user interface design is to create a user interface that makes it easy, efficient, and enjoyable for users to interact with a product.'} btn = {'Get Started'} img = {web}/>
        </>
    );
};

export default Home;
