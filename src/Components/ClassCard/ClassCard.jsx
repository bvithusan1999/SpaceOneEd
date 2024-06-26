import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { requestAddmission, cancelAdmissionRequest, unenrollClass } from '../../Actions/StudentClassActions';
import './ClassCard.css';
import Card from '../../Images/Card.png';   

const ClassCard = ({ classInfo }) => {
  const user = useSelector((state) => state.authReducer.authData);
  const { classId, className, gradeCategory, instructorName, medium, enrolls, classFee, image, joinRequests, enrolledStudents } = classInfo;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [requested, setRequested] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    if (user) {
      const isRequested = joinRequests?.some(request => request.studentId === user.userId);
      setRequested(isRequested);

      const isEnrolled = enrolledStudents?.some(studentId => studentId === user.userId);
      setEnrolled(isEnrolled);
    }
  }, [user, joinRequests, enrolledStudents]);

  const handleRequest = () => {
    if (user) {
      setRequested(true);
      dispatch(requestAddmission(classId, user.userId));
    } else {
      navigate('/login');
    }
  };

  const handleCancelRequest = () => {
    if (user) {
      setRequested(false);
      // dispatch(cancelAdmissionRequest(classId, user.userId));
    }
  };

  const handleUnenroll = () => {
    if (user) {
      setEnrolled(false);
      // dispatch(unenrollClass(classId, user.userId));
    }
  };

  return (
    <div className='Class-Card-view'>
      <div className="class-card-image-view">
        <img src={Card} alt="" />
      </div>
      <div className="card-view-details">
        <span className="class-card-subject">{className}</span>
        <span className="class-card-grade">{gradeCategory}</span>
        <div className='tme'>
          <span className="class-card-teacher">Created by {instructorName}</span>
          <div className="class-card-medium">
            <span>Medium</span>
            <span>{medium}</span>
          </div>
          <div className="class-card-enroll">
            <span>Enrolled Students</span>
            <span>{enrolls?.length || 0}</span>
          </div>
        </div>
        <div className="class-card-fee">
          <span>Monthly fee</span>
          <span>{classFee}</span>
          <div className="published-butt">
            <button>Published</button>
          </div>
        </div>
      </div>
      <div className="class-card-button">
        <button>Add to visit list</button>
        {enrolled ? (
          <button className="unenroll-button" onClick={handleUnenroll}>
            Unenroll
          </button>
        ) : (
          <>
            <button className={requested ? "requested" : "request-button"} onClick={handleRequest} disabled={requested}>
              {requested ? "Request sent" : "Request admission"}
            </button>
            {requested && (
              <button className="cancel-button" onClick={handleCancelRequest}>
                Cancel Request
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
