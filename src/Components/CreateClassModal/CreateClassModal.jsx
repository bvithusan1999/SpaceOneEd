import React, { useState } from 'react';
import './CreateClassModal.css';
import { useSelector, useDispatch } from 'react-redux';
import { createClass } from '../../Actions/ClassActions';

const CreateClassModal = ({ onClose, classSpaceId }) => {
    // const loading = useSelector((state) => state.classReducer.uploading);
    const loading = false;
    const user = useSelector((state) => state.authReducer.authData);
    const initialState = {
        className: "",
        classSpaceId: classSpaceId,
        instructorId: user.userId,
        gradeCategory: "",
        instructorName: "",
        classDescription: "",
        medium: "",
        classFee: "",
        syllabusName: "",
        syllabusDescription: "",
        date: "",
        startTime: "",
        endTime: "",
        syllabus: [],
        classSchedule: [],
    };
    

    const [data, setData] = useState(initialState);
    const [step, setStep] = useState(1);
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const reset = () => {
        setData(initialState);
        setImage(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleAddNextSchedule = () => {
        const newSchedule = {
            date: data.date,
            startTime: new Date(data.date + 'T' + data.startTime).toISOString(),
            endTime: new Date(data.date + 'T' + data.endTime).toISOString()
        };
        setData({
            ...data,
            classSchedule: [...data.classSchedule, newSchedule],
            date: "",
            startTime: "",
            endTime: ""
        });
    };

    const handleAddMoreSyllabus = () => {
        const newSyllabusItem = {
            syllabusName: data.syllabusName,
            syllabusDescription: data.syllabusDescription
        };
        setData({
            ...data,
            syllabus: [...data.syllabus, newSyllabusItem],
            syllabusName: "",
            syllabusDescription: ""
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (step === 1) {
            setStep(2);
        } else if (step === 2) {
            setStep(3);
        } else if (step === 3) {
            setStep(4);
        } else {
            const newClass = {
                ...data,
                image: image,
            };
            try {
                dispatch(createClass(newClass));
                // reset();
                console.log(newClass); // Log the newClass data to check the format
            } catch (error) {
                console.error("Error creating class:", error);
            }
             // Close modal after submission
        }
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>X</button>
                <span className='create-class'>Create class</span>
                <h4 className='heading'>
                    {step === 1 ? "Add Class Details" :
                        step === 2 ? "Add Instructor Details" :
                            step === 3 ? "Add Syllabus" :
                                "Add Schedule"}
                </h4>
                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <>
                            <div className="form-group">
                                <label htmlFor="upload-image">Upload cover image (Optional)</label>
                                <input
                                    type="file"
                                    id="upload-image"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="className">Class Name</label>
                                <input
                                    type="text"
                                    name="className"
                                    value={data.className}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gradeCategory">Category</label>
                                <input
                                    type="text"
                                    name="gradeCategory"
                                    value={data.gradeCategory}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="classDescription">Description</label>
                                <textarea
                                    className="text-area"
                                    name="classDescription"
                                    value={data.classDescription}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="next-but">
                                <button
                                    type="submit"
                                    className="next-button Button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Next"}
                                </button>
                            </div>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <div className="form-group">
                                <label htmlFor="instructorName">Instructor Name</label>
                                <input
                                    type="text"
                                    name="instructorName"
                                    value={data.instructorName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="medium">Medium</label>
                                <input
                                    type="text"
                                    name="medium"
                                    value={data.medium}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="classFee">Monthly Fee</label>
                                <input
                                    type="decimal"
                                    name="classFee"
                                    value={data.classFee}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="bac-nex-but">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="back-button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Back"}
                                </button>
                                <button
                                    type="submit"
                                    className="next-button Button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Next"}
                                </button>
                            </div>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            {data.syllabus.map((item, index) => (
                                <div key={index} className="syllabus-item">
                                    <span>{item.syllabusName}</span>
                                    <p>{item.syllabusDescription}</p>
                                </div>
                            ))}
                            <div className="form-group">
                                <label htmlFor="syllabusName">Title</label>
                                <input
                                    type="text"
                                    name="syllabusName"
                                    value={data.syllabusName}
                                    onChange={handleChange}
                                    
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="syllabusDescription">Description</label>
                                <textarea
                                    className="text-area"
                                    name="syllabusDescription"
                                    value={data.syllabusDescription}
                                    onChange={handleChange}
                                    
                                />
                            </div>
                            <button
                                type="button"
                                className="addmore-button"
                                onClick={handleAddMoreSyllabus}
                            >
                                + Add More
                            </button>
                            <div className="bac-nex-but">
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="back-button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Back"}
                                </button>
                                <button
                                    type="submit"
                                    className="next-button Button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Next"}
                                </button>
                            </div>
                        </>
                    )}
                    {step === 4 && (
                        <>
                            <div className="form-group">
                                <label htmlFor="classSchedule">Class Timetable</label>
                                {data.classSchedule.map((schedule, index) => (
                                    <div key={index} className="schedule-item">
                                        <span>{schedule.date}</span>
                                        <span>From {schedule.startTime}</span>
                                        <span>To {schedule.endTime}</span>
                                    </div>
                                ))}
                                <div className="schedule-group">
                                    <input
                                        type="date"
                                        name="date"
                                        value={data.date}
                                        onChange={handleChange}
                                        
                                    />
                                    <input
                                        type="time"
                                        name="startTime"
                                        value={data.startTime}
                                        onChange={handleChange}
                                        
                                    />
                                    <input
                                        type="time"
                                        name="endTime"
                                        value={data.endTime}
                                        onChange={handleChange}
                                        
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                className="addmore-button"
                                onClick={handleAddNextSchedule}
                            >
                                + Add Next
                            </button>
                            <div className="bac-nex-but">
                                <button
                                    type="button"
                                    onClick={() => setStep(3)}
                                    className="back-button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Back"}
                                </button>
                                <button
                                    type="submit"
                                    className="finish-button Button"
                                    disabled={loading}
                                >
                                    {loading ? "Loading" : "Finish & Publish"}
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CreateClassModal;
