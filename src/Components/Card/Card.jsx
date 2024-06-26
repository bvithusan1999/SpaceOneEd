// src/Components/Card/Card.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import './Card.css';
import { Link } from 'react-router-dom';
import { fetchClasses } from '../../Actions/ClassActions';
  
const Card = () => {
    const dispatch = useDispatch();
    const classState = useSelector((state) => state.classReducer);

    useEffect(() => {
        dispatch(fetchClasses());
    }, [dispatch]);

    

    

    return (
        <div className="card-container">
            <div className="card-header">
                <h1>Explore classes on SpaceEd</h1>
            </div>
            <div className="class-card-container">
                {classState.classes.map((classItem) => (
                    <div className="class-card-content" key={classItem.classId}>
                        <img src={classItem.image} alt="class thumbnail" />
                        <div className="card-details">
                            <div className="card-details-1">
                                <span className="card-subject">{classItem.className}</span>
                                <span className="card-grade">{classItem.gradeCategory}</span>
                                <span className="card-teacher">{classItem.instructorName}</span>
                            </div>
                            <hr />
                            <div className="card-details-2">
                                <div className="card-enroll">
                                    <span>Enrolled Students</span>
                                    <span>{classItem.enrolledStudents ? classItem.enrolledStudents.length : 0}</span>
                                </div>
                                <div className="card-medium">
                                    <span>Medium</span>
                                    <span>{classItem.medium}</span>
                                </div>
                            </div>
                            <hr />
                            <div className="card-details-3">
                                <span>Monthly fee</span>
                                <span>LKR {classItem.classFee.value}</span>
                            </div>
                            <hr />
                            <div className="card-details-4">
                                <span>{classItem.classDescription}</span>
                            </div>
                        </div>
                        <div className="card-button">
                            <Link to={`/class-view-page/${classItem.classId}`}>
                                <button className="Button card-butt">Show details</button>
                            </Link>
                            <div className="card-stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
