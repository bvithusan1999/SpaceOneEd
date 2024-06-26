import React, { useState, useEffect } from 'react';
import './InstructorHomePage.css';
import { useSelector, useDispatch } from 'react-redux';

import newToClassSpaceImage from '../../Images/new-to-class-space.png';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import Greeting from '../../Components/Greeting/Greeting';
import RecentlyAccesedClasses from '../../Components/RecentlyAccesedClasses/RecentlyAccesedClasses';
import InstructorUpcomingClassCard from '../../Components/InstructorUpcomingClassCard/InstructorUpcomingClassCard';
import InstructorJoinClassCard from '../../Components/InstructorJoinClassCard/InstructorJoinClassCard';
import MyClassSpaceCard from '../../Components/MyClassSpaceCard/MyClassSpaceCard';
import CreateClassSpaceModal from '../../Components/CreateClassSpaceModel/CreateClassSpaceModal';
import { getClassSpaces, getAllClasses } from '../../Actions/CreateClassSpaceAction';

const InstructorHomePage = () => {
    const [isDashboard, setDashboard] = useState(true);
    const [isJoinClasses, setJoinClasses] = useState(false);
    const [isMyClassSpace, setMyClassSpace] = useState(false);
    const [isWallet, setWallet] = useState(false);
    const [isUserGroups, setUserGroups] = useState(false);
    const [upcomingClasses, setUpcomingClasses] = useState([]);
    const [recentlyAccessedClasses, setRecentlyAccessedClasses] = useState([]);
    const [instructorJoinClasses, setInstructorJoinClasses] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const user = useSelector((state) => state.authReducer.authData.details);
    const classSpaces = useSelector((state) => state.classSpaceReducer.classSpaces) || [];
    const classes = useSelector((state) => state.classReducer.classes) || [];

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    useEffect(() => {
        if (user && user.userId) {
            dispatch(getClassSpaces(user.userId));
            dispatch(getAllClasses(user.userId));
            fetchRecentlyAccessedClasses();
            fetchInstructorJoinClasses();
            fetchUpcomingClasses();
        }
    }, [dispatch, user]);

    const fetchInstructorJoinClasses = async () => {
        setInstructorJoinClasses([]);
    };

    const fetchUpcomingClasses = async () => {
        setUpcomingClasses([]);
    };

    const fetchRecentlyAccessedClasses = async () => {
        setRecentlyAccessedClasses([]);
    };

    const openEnrolledClasses = () => {
        setJoinClasses(false);
        setUserGroups(false);
        setDashboard(false);
        setWallet(false);
        setMyClassSpace(true);
    };

    const openUserGroups = () => {
        setJoinClasses(false);
        setDashboard(false);
        setWallet(false);
        setMyClassSpace(false);
        setUserGroups(true);
    };

    const openLearningSpace = () => {
        setJoinClasses(false);
        setUserGroups(false);
        setWallet(false);
        setMyClassSpace(false);
        setDashboard(true);
    };

    const openJoinClasses = () => {
        setUserGroups(false);
        setWallet(false);
        setMyClassSpace(false);
        setDashboard(false);
        setJoinClasses(true);
    };

    const openWallet = () => {
        setJoinClasses(false);
        setUserGroups(false);
        setDashboard(false);
        setMyClassSpace(false);
        setWallet(true);
    };

    return (
        <div className={isDashboard || isJoinClasses ? "My-classes-bacgroundcolor" : 'StudentHomePage'}>
            <div className="student-home-page-header">
                <div className='instructor-home-page-title'>
                    {isDashboard && <span>Dashboard</span>}
                    {isJoinClasses && <span>Join Classes</span>}
                    {isMyClassSpace && <span>My Class Space</span>}
                    {isUserGroups && <span>User Groups</span>}
                    {isWallet && <span>Wallet</span>}
                    <div className="search">
                        <input className='search-input' type="text" placeholder='Search class spaces' />
                        <button className='search-button'><FaSearch /></button>
                    </div>
                    <div className="create">
                        <button className='Button' onClick={toggleModal}>+ Create</button>
                    </div>
                </div>

                <div className="student-home-page-navbar">
                    <button className={isDashboard ? "underline" : ""} onClick={openLearningSpace}>Dashboard</button>
                    <button className={isJoinClasses ? "underline" : ""} onClick={openJoinClasses}>Join Classes</button>
                    <button className={isMyClassSpace ? "underline" : ""} onClick={openEnrolledClasses}>My Class Space</button>
                    <button className={isUserGroups ? "underline" : ""} onClick={openUserGroups}>User Groups</button>
                    <button className={isWallet ? "underline" : ""} onClick={openWallet}>Wallet</button>
                </div>
            </div>
            <hr />
            {isDashboard && (
                <div className="my-claases">
                    <div className="my-classes-left">
                        <div className="greeting">
                            <Greeting firstName={user.userFirstName} lastName={user.userLastName} />
                        </div>
                        <div className="recently-accesed-classes">
                            <span className='upcoming-classes-title'>Recently accessed classes</span>
                            {recentlyAccessedClasses.length > 0 ? (
                                recentlyAccessedClasses.map((classInfo, index) => (
                                    <RecentlyAccesedClasses key={index} subject={classInfo.subject} />
                                ))
                            ) : (
                                <div className="no-classes-placeholder">
                                    No recently accessed classes.
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="my-classes-right">
                        <div className="upcoming-classes">
                            <span className='upcoming-classes-title'>Upcoming classes</span>
                            {classes.length > 0 ? (
                                classes.map((classInfo) => (
                                    <React.Fragment key={classInfo.classId}>
                                        {classInfo.timeSlots && classInfo.timeSlots.length > 0 ? (
                                            classInfo.timeSlots.map((slot, index) => (
                                                <InstructorUpcomingClassCard
                                                    key={index}
                                                    subject={classInfo.className}
                                                    timeFrom={slot.startTime}
                                                    timeTo={slot.endTime}
                                                    date={slot.date}
                                                />
                                            ))
                                        ) : (
                                            <InstructorUpcomingClassCard
                                                subject={classInfo.className}
                                                timeFrom="No Start Time"
                                                timeTo="No End Time"
                                                date="No Date"
                                            />
                                        )}
                                    </React.Fragment>
                                ))
                            ) : (
                                <div>No classes available</div>
                            )}
                            <div className="view-all-button">
                                <button>View all <FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isMyClassSpace && (
                <div className="enrolled-classes">
                    {classSpaces.length > 0 ? (
                        classSpaces.map((classInfo) => (
                            <MyClassSpaceCard
                                key={classInfo.classSpaceId}
                                classesCount={classInfo.classesCount}
                                batch={classInfo.classSpaceName}
                                classSpceDetails={classInfo.classSpaceDescription}
                                classSpaceId={classInfo.classSpaceId}
                            />
                        ))
                    ) : (
                        <div>
                            <div className="new-to-class-space">
                                <img src={newToClassSpaceImage} alt="" />
                                <span className='ready-to-go'>Woah! Ready to go...</span>
                                <span className='create-your-first-class-space'>create your first class space in a few more steps</span>
                                <button className='create-button Button' onClick={toggleModal}>+ Create</button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {isWallet && <div className="payments">PAYMENTS</div>}
            {isJoinClasses && (
                <div className="join-classes">
                    <div className="filterButton"></div>
                    <div className="joinClassCards">
                        {classes.length > 0 ? (
                            classes.map((classInfo) => (
                                <React.Fragment key={classInfo.classId}>
                                    {classInfo.timeSlots && classInfo.timeSlots.length > 0 ? (
                                        classInfo.timeSlots.map((slot, index) => (
                                            <InstructorJoinClassCard
                                                key={index}
                                                classInfo={classInfo}
                                                
                                            />
                                        ))
                                    ) : (
                                        <InstructorJoinClassCard
                                            subject={classInfo.className}
                                            timeFrom="No Start Time"
                                            timeTo="No End Time"
                                            date="No Date"
                                        />
                                    )}
                                </React.Fragment>
                            ))
                        ) : (
                            <div>No classes available</div>
                        )}
                    </div>
                </div>
            )}
            {isUserGroups && <div className="user-groups">USER GROUPS</div>}
            {isModalOpen && (
                <CreateClassSpaceModal onClose={toggleModal}>
                    <h4>Create class space</h4>
                </CreateClassSpaceModal>
            )}
        </div>
    );
};

export default InstructorHomePage;
