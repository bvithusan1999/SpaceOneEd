import React, { useState, useEffect } from 'react';
import './LandingPage.css'
import Hero from '../../Components/Hero/Hero';
import Features from '../../Components/Features/Features';
import Card from '../../Components/Card/Card';
import image from '../../Images/Card.png'
import paymentimg from '../../Images/Untitled-3.png'
import feature4 from '../../Images/Untitled-4.png'
import createclass from '../../Images/createclass.png'
import getadmission from '../../Images/getadmition.png'
import Testimonial from '../../Components/Testimonial/Testimonial';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FreeClassCard from '../../Components/FreeClassCard/FreeClassCard';
import { Link } from 'react-router-dom';


const LandingPage = () => {

return (
    <div className="landing-container">
      <div className="hero-container">
        <Hero />
      </div>
      <div className="feat">
        <Features />
      </div>
        <Card />
    </div>
  )
}

export default LandingPage