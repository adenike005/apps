import React, { useContext } from 'react';
import GlobalStyles from './Style/GlobalStyled';
import Landing from './Paging/Landing';
import { ThemeProvider } from 'styled-components';
import ThemeContent from './Contexts/ThemeContent';

function App() {
  const {theme} = useContext(ThemeContent)
  return (
    <>
    <ThemeProvider theme={{theme}}>
    <GlobalStyles/>
      <Landing/>
      </ThemeProvider>
    </>
  );
}

export default App;
