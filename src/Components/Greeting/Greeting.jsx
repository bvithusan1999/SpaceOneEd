import React from 'react';
import './Greeting.css';

const Greeting = ({ firstName, lastName }) => {
  // Get the current hour
  const currentHour = new Date().getHours();
  
  // Define a function to determine the greeting based on the time of day
  const getGreeting = () => {
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  return (
    <div className='Greeting'>
      <span>{getGreeting()}</span>
       
      <span>{firstName} {lastName}!</span>
    </div>
  );
};

export default Greeting;
