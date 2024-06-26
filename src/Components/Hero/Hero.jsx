import React from 'react'
import Typewriter from "typewriter-effect";
import './Hero.css'
import bg1 from '../../Images/BgCover.png'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='container'>
          <div className="container-content">
              <div className="content-title">
                  <h1>It’s wholistic, seamless & simple.</h1>
                  <h2>Elevate your learning experience with SpaceEd classes.</h2>  
              </div>             
              <div className="content-button">               
                  <button>Learn on SpaceEd</button>
                <Link to="/teachon-spaceed">
                  <button>Teach on SpaceEd</button>
                </Link>                
              </div>
              <div className="hero-content-img" >
                  <img src={bg1} alt=""/>
              </div>
          </div>
    </div>
  )
}

export default Hero