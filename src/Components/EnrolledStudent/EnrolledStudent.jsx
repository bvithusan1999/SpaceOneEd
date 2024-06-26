import React from 'react'
import './EnrolledStudent.css'

const EnrolledStudent = ({ enrolledStudent }) => {
    const { studentName } = enrolledStudent;
  return (
    <div className='EnrolledStudent'>
            <div className="enrolled-student">
              <span className='enrolled-student-name'>abc</span>
            </div>
            <div className="accept-button">
                
               
                <button className='remove-button Button'>Remove</button>
            </div>
        </div>
  )
}

export default EnrolledStudent