import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');



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
    font-family: 'MonaLisa', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
`;

export default GlobalStyles;
