import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import "normalize.css/normalize.css"
import { ThemeContextProvider } from './Contexts/ThemeContent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>

    <App /> 
    </ThemeContextProvider>
  </React.StrictMode>
);


