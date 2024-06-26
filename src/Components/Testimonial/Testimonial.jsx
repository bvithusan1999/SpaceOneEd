import React from 'react'
import { FaUser } from 'react-icons/fa';
import './Testimonial.css'

const Testimonial = () => {
  return (
      <div className='testimonial'>
        <div className="profile-icon">
                <FaUser/>
        </div>

      <div className="comments">
                <span>"</span>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation
        </span>
        <span>"</span>
          </div>


    </div>
  )
}

export default Testimonial