import React, { useState, useEffect } from 'react';
import GlobalStyles from './Style/GlobalStyled';
import Landing from './Paging/Landing';
import Preloader from './Component/Preloader';
import Cursor from './Component/CursorView';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <GlobalStyles />
      <Cursor /> {/* Cursor component added here */}
      {loading ? (
        <Preloader />
      ) : (
        <Landing />
      )}
    </>
  );
}

export default App;


