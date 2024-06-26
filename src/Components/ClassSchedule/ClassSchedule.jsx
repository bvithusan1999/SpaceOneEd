import React from 'react'
import './ClassSchedule.css'

const ClassSchedule = ({day, start, end}) => {
  return (
      <div className='ClassSchedule'>
          <div className="schedule-day">
              <span>Every</span>
              <span>{ day}</span>
          </div>
          <div className="schedule-start-time">
               <span>from</span>
              <span>{ start}</span>             
          </div>
          <div className="schedule-end-time">
              <span>to</span>
              <span>{ end}</span>              
          </div>
    </div>
  )
}

export default ClassSchedule