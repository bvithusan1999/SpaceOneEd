import React from 'react'
import './StudentJoinClassCard.css'

const StudentJoinClassCard = ({ classInfo }) => {
  const { className, timeSlots = [] } = classInfo;

  return (
    <div className='StudentJoinClassCard'>
      <span className='class-name'>{className}</span>
      {timeSlots.length > 0 ? (
        timeSlots.map((slot, index) => (
          <div key={index} className='time-slot'>
            <span>{slot.date}</span>
            <span>{slot.startTime} - {slot.endTime}</span>
          </div>
        ))
      ) : (
        <span>No time slots available</span>
      )}
      <button className='Button'>Join now</button>
    </div>
  )
}

export default StudentJoinClassCard;
