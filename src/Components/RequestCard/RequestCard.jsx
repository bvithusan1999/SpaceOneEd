import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RequestCard.css';
import { requestAccepted } from '../../Actions/ClassActions';

const RequestCard = ({ request }) => {
    const { studentName, id, studentId, classId } = request;
    const [accepted, setAccepted] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authReducer.authData);

    const handleAccept = () => {
        const payload = {
            joinRequestId: id,
            instructorId: user.userId,
            accepted: true,
        };

        // Dispatch the action or make the API call
        dispatch(requestAccepted(payload)); // Replace with your actual action

        setAccepted(true);
    };

    return (
        <div className='RequestCard'>
            <div className="student-name">
                <span className='student-name'>{studentName}</span>
            </div>
            <div className="accept-button">
                <button 
                    className='accept-but Button' 
                    onClick={handleAccept} 
                    disabled={accepted}
                >
                    {accepted ? 'Request Accepted' : 'Accept Request'}
                </button>
                <button className='cancel-now-but'>Cancel</button>
            </div>
        </div>
    );
};

export default RequestCard;
