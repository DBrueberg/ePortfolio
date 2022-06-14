// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - App.js
// June 9, 2022
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';

function Main() {
  return (
    <div className="Main">
      <p>Hello World....</p>
      <MDBRipple rippleTag='div' className='bg-image'>
        <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.6)' }}></div>
      </MDBRipple>
      <MDBRipple rippleTag='div' rippleColor='light' className='bg-image'>
        <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
      </MDBRipple>
    </div>
  );
}

export default Main;
