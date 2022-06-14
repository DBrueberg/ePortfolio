// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - MainTemplate.js
// June 13, 2022
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import MainNav from '../main/MainNav';
import App from '../../App';


function MainTemplate() {
  return (
    <div className="MainTemplate">
      <MainNav />
      <App />
    </div>
  );
}

export default MainTemplate;