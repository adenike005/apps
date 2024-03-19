import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap');

@font-face {
  font-family: 'MonaLisa';
  src: url("./Fonts/MonoLisa-Regular.woff2");
}


  :root {
    /* colors */
    --darkBlue_1: #3B447A;
    --darkBlue_2: #0c0c1d;
    --darkBlue_3: #000000;
    --darkBlue_4: rgba(255,255,255,.1);

    /* --darkBlue_4: #101826; */
    --mediumSlateBlue: #6C62E2;
    --lightBlue_1: #F3F1FE;
    --lightBlue_2: #ADBDE3;
    --white: #FFFFFF;
    --black: #000000;
    --gray: #808080;

    --header-height: 60px;
  }

  html {
    font-size: 10px;
    
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
  }

  body {
    background-color: var(--black);
    
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  a {
    text-decoration: none;
    cursor: pointer;
    font-family: 'MonaLisa'; 
  }

  ul,
  li {
    list-style: none;
  }

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  
  img,
  svg {
    width: 100%;
    height: 100%;
  }

  .loader {
  /* Your loader styles */
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.loader.hidden {
  opacity: 0;
}

`;

export default GlobalStyles;
