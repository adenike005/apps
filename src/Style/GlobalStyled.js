import { createGlobalStyle } from 'styled-components';
import themeList from '../data/themeList';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');
@font-face {
  font-family: 'MonaLisa';
  src: url("../public/fonts/MonoLisa-Bold.woff2.ttf");
}
  :root {
    /* colors */
    --darkBlue_1: #3B447A;
    --darkBlue_2: #222B5F;
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
    /* Import and use Poppins font */
    /* @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&family=Lato:wght@100&family=Montserrat:wght@200&family=Whisper&display=swap'); *
    /

    /* font-family: 'EB Garamond', serif; */
    font-family: 'MonaLisa', sans-serif; 
  }

  body {
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
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
