import React,{useState} from 'react'
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    CallControls,
    SpeakerLayout,
    StreamTheme,
    User,
} from '@stream-io/video-react-sdk';
import { MyVideoUI } from '../../Components/VideoConference/MyVideoUI';
import { useLocation } from 'react-router-dom';
import './VideoRenderPage.css'

const VideoRenderPage = () => {
     const [call, setCall] = useState(null);
    const [client, setClient] = useState(null);
     const location = useLocation();
    const response = location.state || {};
    console.log(response);
    const joinClass = async () => {
        const apiKey = 'zqzcsd5wgg5q';
        const instructorResults = response.createInstructorResults;
        const token = response.createInstructorResults.token;
        const user = { id: userId };
        console.log(instructorResults);

        const clientInstance = new StreamVideoClient({ apiKey, user, token });
        setClient(clientInstance);

        const callInstance = clientInstance.call('default', 'CSE2024');
        setCall(callInstance);

        try {
            await callInstance.join(); // Await join operation

            console.log('Joined class successfully');
        } catch (error) {
            console.error('Error joining class:', error);
        }
    }
  return (
      <div className='VideoRenderPage'>
           <div className="class-container">
                    <h1>Created Sample Class</h1>
                    <button onClick={joinClass}>Join class</button>
                    {call && (
                        <StreamVideo client={client}>
                            <StreamCall call={call}>
                                <StreamTheme>
                                    {/* Customize your UI components here */}
                                    <SpeakerLayout />
                                    <CallControls />
                                </StreamTheme>
                            </StreamCall>
                        </StreamVideo>
                    )}
                </div>
    </div>
  )
}

export default VideoRenderPage