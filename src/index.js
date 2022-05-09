import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppLazy from './AppLazy';
// import AppT from './AppT';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <div style={{ backgroundColor: "#ededed" }}>
    <AppLazy />
  </div>


  , document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
