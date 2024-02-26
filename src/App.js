// App.js
import React, { useState, useEffect } from 'react';
import GlobalStyles from './Style/GlobalStyled';
import Landing from './Paging/Landing';
import Preloader from './Component/Preloader';
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './Component/CursorView';

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
        // Conditionally render the Landing component with a transition effect
        <div className={`landing-transition ${showLanding ? 'show' : ''}`}>
          <Landing />
        </div>
      )}
    </>
  );
}

export default App;







