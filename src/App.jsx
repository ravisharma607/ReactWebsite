import React from 'react';
import Home from './Design_RV/Home';
import Service from './Design_RV/Service';
import About from './Design_RV/About';
import Contact from './Design_RV/Contact';
import Navbar from './Design_RV/Navbar';
import Footer from './Design_RV/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;