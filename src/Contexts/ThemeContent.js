import { createContext, useReducer } from "react";
import themeList from "../data/themeList";
// import { type } from "@testing-library/user-event/dist/type";


const ThemeContent = createContext();
const lightTheme = themeList.light;
const darkTheme = themeList.dark;

const themeReducer = (state, action) =>{
    switch(action.type){
        case 'TOGGLE_THEME':
            localStorage.setItem(
                'theme', 
                state.theme === darkTheme ? lightTheme : darkTheme
            )
            
          return{
            theme : state.theme === darkTheme ? lightTheme : darkTheme,
          };
          default:
            return state
    }
}

const ThemeContentProvider = ({children}) =>{
const getInitialTheme = () =>{
    const theme = localStorage.getItem('theme');
    const preferDark = window.matchMedia && window.matchMedia(
        `(perfers-color-theme: dark )`
    ).matches;

    if(theme){
        return theme;
    }

    if (preferDark){
        return darkTheme
    }
    return lightTheme;
}
    const initialstate = {
        theme : getInitialTheme(),
    }

    const [state, dispatch] = useReducer(themeReducer,initialstate);

    const value = {
        theme : state.theme,
        toggleTheme : () => dispatch({type: 'TOGGLE_THEME'})
    }

    return(
        <ThemeContent.Provider value={value}>
          {children}
        </ThemeContent.Provider>
    )
}

export { ThemeContentProvider};

export default ThemeContent;