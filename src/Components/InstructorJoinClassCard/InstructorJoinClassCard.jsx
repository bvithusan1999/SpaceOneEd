import React, { useState } from 'react'
import '@stream-io/video-react-sdk/dist/css/styles.css';
import './InstructorJoinClassCard.css'
import data from "../VideoConference/userData";
import axios from "axios";
import './InstructorJoinClassCard.css';
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    CallControls,
    SpeakerLayout,
    StreamTheme,
    User,
} from '@stream-io/video-react-sdk';
import { MyVideoUI } from "../VideoConference/MyVideoUI";
import { useNavigate } from 'react-router-dom';
import CreateClass from '../VideoConference/CreateClass';

const InstructorJoinClassCard = ({ classInfo }) => {
          const { classSpaceId, classId, instructor, enrolledStudents = [], timeSlots = [], className } = classInfo;
    const [response, setResponse] = useState(null);
    const [call, setCall] = useState(null);
    const [client, setClient] = useState(null);



    const createClass = async () => {
        const data = {
            classSpaceId,
            classId,
            instructorId: instructor,
            role: "Instructor",
            students: enrolledStudents.map(student => ({
                studentId: student,
                name: "Student Name", // Replace with actual name if available in the real structure
                role: "user"
            })),
            classSchedule: timeSlots.map(slot => ({
                startDate: slot.date,
                startTime: slot.startTime,
                endTime: slot.endTime
            }))
        };
        try {
            const classResponse = await axios.post('http://192.168.92.225:8080/api/v1/videocon/classdata', data);
            console.log('Class Data sent successfully:', classResponse.data);
            setResponse(classResponse.data);

            const apiKey = 'zqzcsd5wgg5q';
            const userId = data.instructorId;
            const token = classResponse.data.createInstructorResults.token; // Use the token from the response
            const user = { id: userId };

            const clientInstance = new StreamVideoClient({ apiKey, user, token });
            setClient(clientInstance);

            const callInstance = clientInstance.call('default', 'CSE2024');
            setCall(callInstance);

            await callInstance.join();
            console.log('Joined class successfully');
        } catch (error) {
            console.error('Error creating/joining class:', error);
        }
    };

    return (
      <div className="container">
        <span className='name'>{className}</span>
        <span>{timeSlots.date}</span>
            <button className='Join Button' onClick={createClass}>Join class</button>
            {response && (
                <div className="class-container">
                    {call && (
                        <StreamVideo client={client}>
                            <StreamCall call={call}>
                                <StreamTheme>
                                    <MyVideoUI/>
                                    {/* Customize your UI components here */}
                                    <SpeakerLayout />
                                    <CallControls />
                                </StreamTheme>
                            </StreamCall>
                        </StreamVideo>
                    )}
                </div>
            )}
        </div>
    );
}

export default InstructorJoinClassCard