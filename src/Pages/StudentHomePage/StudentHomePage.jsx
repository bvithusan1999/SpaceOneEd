import React, {useState} from 'react'
import './StudentHomePage.css';
import image from '../../Images/Card.png'
import { useSelector } from 'react-redux';
import EnrolledClassCard from '../../Components/EnrolledClassCard/EnrolledClassCard';
import Greeting from '../../Components/Greeting/Greeting';
import UpComingClass from '../../Components/UpComingClass/UpComingClass';
import PendingFee from '../../Components/PendingFee/PendingFee';
import { FaArrowRight } from 'react-icons/fa';
import RecentlyAccesedClasses from '../../Components/RecentlyAccesedClasses/RecentlyAccesedClasses';
import StudentJoinClassCard from '../../Components/StudentJoinClassCard/StudentJoinClassCard';
const StudentHomePage = () => {
    const [isLearningSpace, setLearningSpace] = useState(true);
    const [isJoinClasses, setJoinClasses] = useState(false);
    const [isEnrolledClasses, setEnrolledClasses] = useState(false);
    const [isPayments, setPayments] = useState(false);
    const user = useSelector((state) => state.authReducer.authData.details);
    const classes = useSelector((state) => state.classReducer.classes);
    const openEnrolledClasses = () => {
        setJoinClasses(false);
        setLearningSpace(false);
        setPayments(false);
        setEnrolledClasses(true);
       
    };
    const openLearningSpace = () => {
        setJoinClasses(false);
        setPayments(false);
        setEnrolledClasses(false);
        setLearningSpace(true);
       
    };
    const openJoinClasses = () => {
        
        setPayments(false);
        setEnrolledClasses(false);
        setLearningSpace(false);
        setJoinClasses(true);
       
    };
    const openPayment = () => {
        setJoinClasses(false);
        setLearningSpace(false);
        setEnrolledClasses(false);
        setPayments(true);
       
    };
  return (
      <div className={isLearningSpace || isJoinClasses ? "My-classes-bacgroundcolor":'StudentHomePage'}>
          <div className="student-home-page-header">
              <div className='student-home-page-title'>
                  <span >Learning Space</span>
              </div>
            
            <div className="student-home-page-navbar">
                  <button className={isLearningSpace ? "underline" :""} onClick={openLearningSpace}>Learning Space</button>
                  <button className={isJoinClasses ? "underline" :""} onClick={openJoinClasses}>Join Classes</button>
              <button className={isEnrolledClasses ? "underline" :""} onClick={openEnrolledClasses}>Entrolled Classes</button>
              <button className={isPayments ? "underline" :""} onClick={openPayment}>Payments</button>
              </div>
              
          </div>
          <hr />
          {isLearningSpace && <div className="my-claases">
              <div className="my-classes-left">
                  <div className="greeting">
                      <Greeting firstName={user.userFirstName} lastName={user.userLastName} />
                  </div>
                  <div className="recently-accesed-classes">
                      <span className='upcoming-classes-title'>Recently accesed classes</span>
                      <RecentlyAccesedClasses subject='Combined Mathematics'/>
                     
                      
                  </div>
              </div>
              <div className="my-classes-right">
                  <div className="upcoming-classes">
                      <span className='upcoming-classes-title'>Upcoming classes</span>
                      {classes.map((classInfo, index) => (
                                classInfo.enrolledStudents.includes(user.userId) && 
                                classInfo.timeSlots && classInfo.timeSlots.length > 0 && classInfo.timeSlots.map((slot, idx) => (
                                    <UpComingClass
                                        key={`${index}-${idx}`}
                                        subject={classInfo.className}
                                        timeFrom={slot.startTime}
                                        timeTo={slot.endTime}
                                        day={slot.day}
                                        date={slot.date}
                                    />
                                ))
                            ))}
                      <div className="view-all-button">
                          <button>View all   <FaArrowRight/></button>
                      </div>
                  </div>
                  <div className="pending-fee">
                    <span className='upcoming-classes-title'>Pending Fee</span>

                      
                      <div className="view-all-button">
                          <button>View all   <FaArrowRight/></button>
                      </div>
                  </div>
              </div>
          </div>}


          {isEnrolledClasses && (
            <div className="enrolled-classes">
                {classes.map((classInfo, index) => (
                    classInfo.enrolledStudents.includes(user.userId) && (
                    <EnrolledClassCard key={index} classInfo={classInfo} />
                    )
                ))}
            </div>
      )}

        {isPayments && <div className="payments">
              PAYMENTS
          </div>}
          {isJoinClasses &&
              <div className="join-classes">
                <div className="filterButton">
                    
                </div>
              {classes.map((classInfo, index) => (
                classInfo.enrolledStudents.includes(user.userId) && (
              <StudentJoinClassCard
                key={index}
                classInfo={classInfo}
              />
            )
                ))}
             
              </div>
          }
          

          
    </div>
  )
}

export default StudentHomePage