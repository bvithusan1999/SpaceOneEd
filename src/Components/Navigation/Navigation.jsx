import React from 'react'
import './Navigation.css'
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="company-name">
        <Link to='/'>
          <span className="company-name-span">SpaceED</span>
          </Link>
            
        </div>
        <div className="nav-buttons">
            <button>Explore Classes</button>
            <button>Become an Instructor</button>
            <button>About Us</button>
        </div>
        <div className="login">
        <div className="login-button">
          <Link to='/signin'>
            <button className='signin-button'>Sign in</button>
          </Link>
                
            </div>
              <div className="account-icon">
                <FaUser/>
        </div>
        
        </div>
    </div>
  )
}

export default Navigation