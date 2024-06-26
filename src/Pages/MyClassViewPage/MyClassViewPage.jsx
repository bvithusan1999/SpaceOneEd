import React, { useState } from 'react';
import './MyClassViewPage.css';
import cardimg from '../../Images/Card.png';
import RequestCard from '../../Components/RequestCard/RequestCard';
import { useLocation } from 'react-router-dom';
import EnrolledStudent from '../../Components/EnrolledStudent/EnrolledStudent';

const MyClassViewPage = () => {
    const [activeSection, setActiveSection] = useState('Class details');
    const location = useLocation();
    const { classInfo } = location.state || {};
    console.log(classInfo);

    return (
        <div className='MyClassViewPage'>
            <header className="header">
                <h1>{classInfo?.className || 'Class Name'}</h1>
                <div className="delete">
                    <button className="delete-button Button">Delete</button>
                </div>
            </header>
            <div className="tabs">
                <button
                    className={activeSection === 'Class details' ? 'active' : ''}
                    onClick={() => setActiveSection('Class details')}
                >
                    Class details
                </button>
                <button
                    className={activeSection === 'Enrolled students' ? 'active' : ''}
                    onClick={() => setActiveSection('Enrolled students')}
                >
                    Enrolled students
                </button>
                <button
                    className={activeSection === 'Payments' ? 'active' : ''}
                    onClick={() => setActiveSection('Payments')}
                >
                    Payments
                </button>
                <button
                    className={activeSection === 'Join requests' ? 'active' : ''}
                    onClick={() => setActiveSection('Join requests')}
                >
                    Join Requests
                </button>
            </div>
            <hr style={{ width: "100%" }}></hr>
            <div className="section">
                {activeSection === 'Class details' && (
                    <>
                        <div className="my-class-card">
                            <div className="img" style={{ backgroundImage: `url(${cardimg})` }}>
                                <h1></h1>
                            </div>
                            <div className="my-card-details">
                                <span className='published'>Published</span>
                                <span className="my-class-name">{classInfo?.className || 'Class Name'}</span>
                                <span className="batch">{classInfo?.batch || 'Batch Name'}</span>
                                <span className="medium">Created by {classInfo?.instructorName || 'Instructor Name'}</span>
                                <span className="medium">Medium {classInfo?.medium || 'Medium'}</span>
                                <span className="medium">Enrolled students {classInfo?.enrolledStudent?.length || 0}</span>
                                <span className="monthly-fee">Monthly fee LKR {classInfo?.classFee || 'Fee'}</span>
                            </div>
                        </div>
                        <div className="my-class-description">
                            <span>Description</span>
                            <hr />
                            <span className='description'>{classInfo?.classDescription || 'No description available.'}</span>
                        </div>
                        <div className="my-class-syllabus">
                            <span>Syllabus</span>
                            <hr />
                            {classInfo?.syllabus?.length > 0 ? (
                                classInfo.syllabus.map((lesson, index) => (
                                    <div key={index} className="syllabus-lessons">
                                        <span className="class-small-circle"></span>
                                        <span className='syllabuses'>{lesson.syllabusDescription}</span>
                                    </div>
                                ))
                            ) : (
                                <span>No syllabus available.</span>
                            )}
                        </div>
                        <div className="my-class-schedule">
                            <span>Schedule</span>
                            <hr />
                            {classInfo?.classSchedule?.length > 0 ? (
                                classInfo.classSchedule.map((schedule, index) => (
                                    <div key={index} className="schedule-lessons">
                                        <span className="class-small-circle"></span>
                                        <span className='schedules'>{`${schedule.date} ${schedule.startTime} - ${schedule.endTime}`}</span>
                                    </div>
                                ))
                            ) : (
                                <span>No schedule available.</span>
                            )}
                        </div>
                    </>
                )}
                {activeSection === 'Join requests' && (
                    <div>
                        {classInfo?.joinRequests?.length > 0 ? (
                            classInfo.joinRequests.map((request, index) => (
                                <RequestCard key={index} request={request} />
                            ))
                        ) : (
                            <span>No join requests available.</span>
                        )}
                    </div>
                )}

                {activeSection === 'Enrolled students' && (
                    <>
                        {classInfo?.enrolledStudents?.length > 0 ? (
                            classInfo.enrolledStudents.map((student, index) => (
                                <EnrolledStudent key={index} enrolledStudent={student} />
                            ))
                        ) : (
                            <span>No students enrolled.</span>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default MyClassViewPage;
