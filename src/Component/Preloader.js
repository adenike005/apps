import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for the progress bar
const progressAnimation = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

// Styled components for the preloader
const PreloaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000; 
  color: white;
  overflow: hidden;
  z-index: 999;
`;

const ProgressBarContainer = styled.div`
  width: 20%; 
  height: 0.3rem;
  background-color: #4a5568; 
  border-radius: 9999px;


  @media only screen and (max-width: 900px){
    width: 50%; 
    
}
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #f7fafc; 
  border-radius: 9999px; 
  animation: ${progressAnimation} 2s linear infinite; 
`;




// Preloader component
const Preloader = () => {
  return (
    <PreloaderWrapper>
      <ProgressBarContainer >
        <ProgressBar />
      </ProgressBarContainer>
    </PreloaderWrapper>
  );
}

export default Preloader;
