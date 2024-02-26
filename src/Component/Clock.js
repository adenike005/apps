import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

// Styled components for the clock
const ClockContainer = styled.div`
  font-size: 1.3rem;
  color: #4a5568;
  font-weight: 600;
  font-family: "Lato", sans-serif;
`;

// Functional component representing the clock
function Clock() {
  // State to store the time
  const [time, setTime] = useState({
    hour: moment().format('hh'),
    min: moment().format('mm'),
    sec: moment().format('ss')
  });

  // Effect to update time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures effect runs only once on component mount

  // Function to update time
  const updateTime = () => {
    setTime({
      hour: moment().format('hh'),
      min: moment().format('mm'),
      sec: moment().format('ss')
    });
  };

  return (
    <ClockContainer>
      <div>
        {time.hour} <span>:</span> {time.min} <span>:</span> {time.sec} WAT
      </div>
    </ClockContainer>
  );
}

export default Clock;
