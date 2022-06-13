// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - App.js
// June 9, 2022
// Last Edited (Initials, Date, Edits):

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './css/index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import reportWebVitals from './reportWebVitals';
import MainTemplate from './component/template/MainTemplate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainTemplate />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
