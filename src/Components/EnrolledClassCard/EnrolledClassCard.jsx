import React from 'react'
import './EnrolledClassCard.css'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import img from '../../Images/Card.png'

const EnrolledClassCard = ({ classInfo }) => {
  const { instructorName, gradeCategory, className, enrolledStudents=[], joinRequests=[] } = classInfo;
  const user = useSelector((state) => state.authReducer.authData);
  const navigate = useNavigate();
  
  console.log(user.role);
   const myClassPage = () => {
    navigate('/my-class-page', { state: { classInfo } });
  };
  const classViewPage = () => { 
    navigate(`/class-view-page/${classInfo.classId}`);    
  };
  
  return (
    <div className='EnrolledClassCard' onClick={user.role === 'INSTRUCTOR'? myClassPage: classViewPage}>
         
      <div className="card-image" style={{ backgroundImage: `url(${img})` }}>
        {user.role === 'INSTRUCTOR' &&
          <>
          <button className='card-edit-button' ><FaEdit /></button>
          <button className='card-trash-button'><FaTrash /></button>
        </>}
      </div>
      {user.role === 'INSTRUCTOR' &&
        <div className="card-details">
              <div className="card-details-0">
                  <span className="card-name">Class</span>
                  <span className="card-student-count">{enrolledStudents.length} Students</span>
              </div>
        </div>}
          <div className="card-details">
              <div className="card-details-1">
                  <span className="card-subject">{className}</span>
                  <span className="card-grade">{gradeCategory}</span>
          {user.role === 'STUDENT' &&  <span className="card-teacher">{instructorName}</span>}
        </div>
        {user.role === 'INSTRUCTOR' &&
          <>
          <div className="join-requests">
            <span className='request-count'>{joinRequests.length}</span>
              <span className='join-request'> Join requests</span>
              
          </div>
          </>
        }
            
          </div>
    </div>
  )
}

export default EnrolledClassCard