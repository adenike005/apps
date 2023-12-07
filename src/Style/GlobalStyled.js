import { createGlobalStyle } from 'styled-components';

// Typography
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import themeList from '../data/themeList';


const GlobalStyles = createGlobalStyle`
:root{
    /* colors */
    --primary_color : #FF0000;
    --secondary-color : #ffff;
    --darkBlue_1: #3B447A;

    --header-height: 50px;
}

html{
    font-size: 10px;
}
body{
  background-color: ${(props) => props.theme.theme === themeList.light ? `var(primary_color)` : `var(--secondary-color)` };

 font-family: 'Poppins', sans-serif;
}

*,*::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
    cursor: pointer;
}
ul, li{
    list-style: none;
}

.container{
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
}

img{
    width: 100%;
    height: 100%;
}


`

export default GlobalStyles;