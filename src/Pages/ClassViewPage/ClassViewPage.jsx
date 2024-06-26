import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchClassById } from '../../Actions/ClassActions';
import ClassCard from '../../Components/ClassCard/ClassCard';
import ClassSchedule from '../../Components/ClassSchedule/ClassSchedule';
import './ClassViewPage.css';
import Card from '../../Images/Card.png';   

const ClassViewPage = () => {
    const dispatch = useDispatch();
    const { classId } = useParams();
    console.log("Class ID:", classId); // Add this line

    const classState = useSelector((state) => state.classReducer);
    const { loading, currentClass, error } = classState;

    useEffect(() => {
        dispatch(fetchClassById(classId));
    }, [dispatch, classId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!currentClass) {
        return <div>Class not found</div>;
    }
    return (
        <div className='ClassViewPage'>
            <div className="class-card">
                <ClassCard
                    classInfo ={classState.currentClass}
                />
            </div>
            <div className="class-details">
                <div className="class-description">
                    <span>Description</span>
                    <hr />
                    <span className='description'>
                        Welcome to our comprehensive online course on {currentClass.subject}!
                        Welcome to our comprehensive online course on Digital Marketing Fundamentals! In this dynamic and interactive program, you will embark on a journey to acquire essential skills and knowledge to thrive in the ever-evolving world of digital marketing.
                    </span>
                </div>
                <div className="class-syllabus">
                    <span>Syllabus</span>
                    <hr />
                    <div className="syllabus-lessons">
                        <span className="class-small-circle"></span>
                        <span className='syllabuses'>
                           Foundational Concepts: Gain a solid understanding of the core principles of digital marketing, including SEO, social media marketing, email marketing, and content strategy. {currentClass.subject}.
                        </span>
                    </div>
                    <div className="syllabus-lessons">
                        <span className="class-small-circle"></span>
                        <span className='syllabuses'>
                            Foundational Concepts: Gain a solid understanding of the core principles of digital marketing, including SEO, social media marketing, email marketing, and content strategy.
                        </span>
                    </div>
                    <div className="syllabus-lessons">
                        <span className="class-small-circle"></span>
                        <span className='syllabuses'>
                            Foundational Concepts: Gain a solid understanding of the core principles of digital marketing, including SEO, social media marketing, email marketing, and content strategy.
                        </span>
                    </div>
                </div>
                <div className="class-schedule">
                    <span>Schedule</span>
                    <hr />
                    <div className="schedules">
                        <ClassSchedule day="Monday" start="8.00 pm" end="10.00 pm" />
                        <ClassSchedule day="Wednesday" start="8.00 pm" end="10.00 pm" />
                        <ClassSchedule day="Friday" start="8.00 pm" end="10.00 pm" />
                    </div>
                </div>
                <div className="class-review">
                    <span>Review</span>
                    <hr />
                    <div className="reviews">
                        {/* Add review components here */}
                    </div>
                </div>
                <div className="class-report-issue">
                    <button className='Button report-button'>Report issue</button>
                </div>
            </div>
        </div>
    );
};

export default ClassViewPage;
