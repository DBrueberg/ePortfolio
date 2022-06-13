// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - App.js
// June 9, 2022
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './component/main/Main';
import About from './component/main/About';
import Project from './component/main/Project';
import Education from './component/main/Education';
import Skill from './component/main/Skill';
import Interest from './component/main/Interest';
import Certification from './component/main/Certification';


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Main />} />
      <Route path='/about' element={<About />} />
      <Route path='/project' element={<Project />} />
      <Route path='/education' element={<Education />} />
      <Route path='/skill' element={<Skill />} />
      <Route path='/interest' element={<Interest />} />
      <Route path='/certification' element={<Certification />} />
    </Routes>
    
  );
}

export default App;
