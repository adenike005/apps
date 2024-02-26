import React, { useState, useEffect } from 'react';
import GlobalStyles from './Style/GlobalStyled';
import Landing from './Paging/Landing';
import Preloader from './Component/Preloader';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const [loading, setLoading] = useState(true);

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
    }

    return () => clearTimeout(timer); 
  }, [loading]);

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <Preloader />
      ) : (
        <Landing />
      )}
    </>
  );
}

export default App;



