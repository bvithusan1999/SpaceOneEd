import React from 'react'
import './LoginCard.css'

const LoginCard = () => {
  return (
      <div className='login-card'>
          <div className="login-card-header">
              <span>SpaceEd</span>
              <span>Already have an account ? Sign in</span>
          </div>
          <div className="login-card-h1">
              <h4>Create your free instructor account today.</h4>
          </div>
          <div className="login-card-input">
              <div className="login-card-email">
                  <span>Email address</span>
                  <input type="email" />
              </div>
              <div className="login-card-password">
                  <span>Password</span>
                  <input type="password" />
              </div>
              <div className="login-card-name">
                  <div className="login-card-firstname">
                      <span>First name</span>
                  <input type="text" />
                  </div>
                  <div className="login-card-lastname">
                      <span>Last name</span>
                  <input type="text" />
                  </div>
              </div>
              <div className="login-card-phone">
                  <span>Phone</span>
                  <input type="text" />
              </div>
          </div>
          <div className="login-card-button">
              <button className='Button'>Get Started</button>
          </div>
          
    </div>
  )
}

export default LoginCard