import React from 'react'
import './PendingFee.css'
const PendingFee = ({month,fee}) => {
  return (
      <div className='PendingFee'>
          <div className="pendingfee">
              <div className="pending-fee-month">
              <span className='month'>{ month}</span>
              
                </div>
                <div className="pending-fee-amount">
                    <span className='amount'>{ fee}</span>
                    
                </div>
                <div className=" pay-now-button">
                    <button className='Button'>Pay now</button>
                </div>
          </div>
          <hr/>
          
          
    </div>
  )
}

export default PendingFee