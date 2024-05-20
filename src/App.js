import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './Style/GlobalStyled';
import Landing from './Paging/Landing';
import Preloader from './Component/Preloader';
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './Component/CursorView';

// Styled component for the Landing component with transition effects
const StyledLanding = styled.div`
  transform: translateY(${props => props.show ? '0' : '-0vh'});
  /* transition: transform 0.5s ease-in; */
  transition: transform 0.5s ease-in-out;
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Initialize Locomotive Scroll after loading is complete
    if (!loading) {
      const scroll = new LocomotiveScroll({
        // Configure Locomotive Scroll options here
      });

      // Add a small delay before showing the landing to allow the preloader to fade out
      setTimeout(() => {
        setShowLanding(true);
      }, 300);
    }

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      <GlobalStyles />
      {!loading && <Cursor />}
      {loading ? (
        <Preloader />
      ) : (
        // Render the Landing component with the styled component and transition effect
        <StyledLanding show={showLanding}>
          <Landing />
        </StyledLanding>
      )}
    </>
  );
}

export default App;








