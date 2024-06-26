import React, { useState } from "react";
import './InstructorAuthPage.css'
import img from '../../Images/Auth-page-img.png'
import { FaArrowLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { logIn, signUp } from "../../Actions/AuthAction.js";



const InstructorAuthPage = () => {
    const initialState = {
        username:"",
        email: "",
        firstName: "",
        lastName: "",
        phone: "" ,
        password: "",
        role: "INSTRUCTOR",
        institutionName: '',
        capacity: '',
        instructorPosition: '',
        location: '',
        optionalPhone: ''
    };

    const loading = useSelector((state) => state.authReducer.loading);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [isStudentSignUp, setIsStudentSignUp] = useState(true);
    const [isStudentSignUpPage_02, setIsStudentSignUpPage_02] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [data, setData] = useState(initialState);

    
    const resetForm = () => {
    setData(initialState);
    
  };


    const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
        // Update both username and email when username input changes
        setData(prevData => ({
            ...prevData,
            username: value,
            email: value  // Sync the username with email
        }));
    } else {
        // Handle changes for other inputs normally
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
};

    const handleSubmitNext = async (e) => {
        e.preventDefault();
        
        setIsStudentSignUpPage_02(true);
    };

    const handleSubmit = async (e) => {
    console.log(data);
        e.preventDefault();
        if (isStudentSignUpPage_02) {
            dispatch(signUp(data, navigate))
            console.log(data);
        } else {
            // Simulated login logic
            dispatch(logIn(data, navigate));
            console.log(data);
        }
        
    }
  return (
      <div className='AuthPage'>
          <div className="auth-page-details">
              <div className="auth-page-details-title">
                <span>{isStudentSignUp ? "Get started with SpaceEd for free":"Welcome back!"}</span>
              </div>
              <div className="auth-page-details-discription">
                  <span>
                      {isStudentSignUp ?
                          "Create and deliver your online classes with SpaceEd to your students for free. No matter their device, location and no need any payment verifications."
                          : "Happy to see you again. please log in to your account to access your spaceEd classes."}
                  </span>
                  
              </div>
              {/*<div className="auth-page-details-img">*/}
                  <img src={img} alt="" />
              {/*</div>*/}
              <div className="auth-page-details-home-button">
                  <button><FaArrowLeft/> Go home</button>
              </div>
          </div>
          <div className='login-card'>
            <div className="login-card-content">
            <div className="login-card-header">
                  <span>SpaceEd</span>
                  {isStudentSignUp  && (
                      <span onClick={() => {
                      setIsStudentSignUp(false);
                          setIsLogin(true);
                              setIsStudentSignUpPage_02(false);
                              resetForm();
                      
                      }}>
                          Already have an account ? Sign in</span>
                  )}
                  {isLogin && (
                      <span onClick={() => {
                      
                          setIsLogin(false);
                          setIsStudentSignUpPage_02(false);
                              setIsStudentSignUp(true);
                                resetForm();
                      
                      }}>
                          Don’t have an account ? Sign up</span>
                  )}
                  
            </div>
            <div className="login-card-h1">
                  <span className="login-card-h1-span-1">{isStudentSignUp ? "Create your free instructor account today." : (isStudentSignUpPage_02 ? "You're almost done!" : "Log in to SpaceEd.") }</span>
                  {isStudentSignUpPage_02 && (
                      <span className="login-card-h1-span-2">Tell us bit more about you and your institution</span>
                  )}
            </div>
              <div className="login-card-input">
                    {isLogin && (
                        <form  onSubmit={handleSubmit}>
                            {/* Login form */}
                            <div className="login-card-email">
                                <span>Email address</span>
                                <input
                                    required
                                    type="email"
                                    name="username"
                                    value={data.username}
                                    
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="login-card-password">
                                <span>Password</span>
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                  />
                                  <span>{isStudentSignUp ? "" : "Forget your password?"}</span>
                            </div>
                            <div className="login-card-button">
                              <button className='Button'
                                  type="submit"
                                  
                              >
                                  Continue</button>
                            </div>
                        </form>
                    )}
                    {isStudentSignUp && (
                        <form onSubmit={handleSubmitNext}>
                            {/* Student sign up form */}
                            <div className="login-card-email">
                                <span>Email address</span>
                            <input
                                required
                                type="email"
                                name="username"
                                value={data.username}
                                
                                onChange={handleChange}
                            />                            </div>
                            <div className="login-card-password">
                                <span>Password</span>
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                  />
                                  <span>Forget your password?</span>
                            </div>
                            <div className="login-card-name">
                                <div className="login-card-firstname">
                                    <span>First name</span>
                                    <input
                                        required
                                        type="text"
                                        name="firstName"
                                        value={data.firstName}
                                        onChange={handleChange}
                                    />                                </div>
                                <div className="login-card-lastname">
                                    <span>Last name</span>
                                    <input
                                        required
                                        type="text"
                                        name="lastName"
                                        value={data.lastName}
                                        onChange={handleChange}
                                    />                                </div>
                            </div>
                            <div className="login-card-phone">
                                <span>Phone</span>
                                <input
                                    required
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    onChange={handleChange}
                                />                            </div>
                            <div className="login-card-button">
                              <button
                                  className={isStudentSignUpPage_02 ? "buttonHidden" : "Button"}
                                  type="submit">Next</button>
                            </div>
                        </form>
                    )}
                    {isStudentSignUpPage_02 && (
                        <form >
                            {/* Student sign up page 2 form */}
                            <div className="signup-institution-name-capacity">
                                <div className="signup-institution-name">
                                    <span>Institution name</span>
                                  <input
                                        required
                                      type="text"
                                      name="institutionName"
                                      value={data.institutionName}
                                      onChange={handleChange}
                                  />
                                </div>
                                <div className="signup-capacity">
                                    <span>Capacity</span>
                                  <select
                                      style={{ color: "gray" }}
                                      value={data.capacity}
                                      onChange={handleChange}
                                      name="capacity"
                                  >
                                        <option value="" disabled hidden>Capacity</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                        <option value="500">500</option>
                                        <option value="more">more</option>
                                    </select>
                                </div>
                            </div>
                            <div className="signup-instructor-position">
                                <span>What best describes you?</span>
                              <select
                                  style={{ color: "gray" }}
                                  value={data.instructorPosition}
                                  onChange={handleChange}
                                  name="instructorPosition"
                              >
                                    <option value="" disabled hidden>Lecturer/Teacher/Undergraduate/Other</option>
                                    <option value="lecture">Lecturer</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="undergraduate">Undergraduate</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <div className="signup-location">
                                    <span>Location</span>
                                  <select
                                      style={{ color: "gray" }}
                                      value={data.location}
                                      onChange={handleChange}
                                      name="location"
                                  >
                                        <option value="" disabled hidden>District</option>
                                        <option value="galle">Galle</option>
                                        <option value="colombo">Colombo</option>
                                        <option value="trincomalee">Trincomalee</option>
                                        <option value="mullaitivu">Mullaitivu</option>
                                        <option value="kilinochi">Kilinochi</option>
                                        <option value="jaffna">Jaffna</option>
                                    </select>
                                </div>
                                <div className="login-card-password">
                                    <span>Phone(Optional)</span>
                                  <input
                                      type="text"
                                      name="optionalPhone"
                                      value={data.optionalPhone}
                                      onChange={handleChange}
                                      placeholder="+94 XXXXXXXX.."
                                  />
                                </div>
                            </div>
                            <div className="login-card-button">
                              <button
                                    className='Button'
                                    onClick={handleSubmit}
                                    
                              >Get started</button>
                            </div>
                        </form>
                    )}
                </div>
            
              
          </div>
        </div>
                {/* <div className="auth-page-home-button">
                  <button><FaArrowLeft/> Go home</button>
              </div> */}

    </div>
  )
}


export default InstructorAuthPage