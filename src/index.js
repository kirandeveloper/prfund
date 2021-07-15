import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home'; 
import Feature from './feature'; 
import Pricing from './pricing'; 
import Faqs from './faqs'; 
import About from './about'; 

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
