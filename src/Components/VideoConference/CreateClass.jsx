import React, { useState } from 'react';
// import data from "../userData";
import axios from "axios";
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    CallControls,
    SpeakerLayout,
    StreamTheme,
} from '@stream-io/video-react-sdk';
import { MyVideoUI } from "./MyVideoUI";

const CreateClass = ({classInfo}) => {
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
            const classResponse = await axios.post('http://192.168.8.197:8080/api/v1/videocon/classdata', data);
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
            <button className='Button' onClick={createClass}>Create class</button>
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
};

export default CreateClass;