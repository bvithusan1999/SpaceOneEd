import React from 'react'
import { FaStar } from 'react-icons/fa';
import './FreeClassCard.css'

const FreeClassCard = ({image,subject,grade,teacher,gualification,date, timeFrom, timeTo}) => {
  return (
      <div className='free-class-card'>
          <div className="card-img">
              <img src={image} alt="" />
          </div>
          <div className="free-card-details">
              <span className="free">Free</span>
              <span className="free-subject">
                  {subject}
              </span>
              <span className="free-grade">
                  {grade}
              </span>
              <span className="free-teacher">
                  By {teacher}
              </span>
              <span className="free-teacher-qualification">
                  {gualification}
              </span>
              <div className="free-date-and-time">
                  <span>{date}, {timeFrom} to { timeTo}</span>
              </div >
              <div className="free-join-button">
              
                  <button className='Button join-butt'>Join</button>
              
              
              <div className="card-stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
              </div>
          </div>

          </div>
    </div>
  )
}

export default FreeClassCard