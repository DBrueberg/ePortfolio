// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - Project.js
// June 13, 2022
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import { MDBContainer, MDBIcon, MDBTypography } from 'mdb-react-ui-kit';


function Project() {
  return (
    <MDBContainer className="Project">
      <MDBTypography className="text-center" variant='h1'>
        Project
      </MDBTypography>
      <MDBTypography className="mx-auto" listUnStyled style={{ maxWidth: "42rem" }}>
        <li className="mb-2">
          <MDBTypography className="mb-1" style={{ fontSize: "large", fontWeight: "bold" }} >
            Restaurant Club
          </MDBTypography>
          <MDBTypography  listUnStyled >
            <li style={{ fontSize: "small" }}>
              A fully responsive SPA React web application that allows users to create and share restaurant reviews
            </li>
            <li>
            <MDBIcon className="me-1" fas icon="link" />
            <MDBIcon className="me-1" fab icon="github" />
            </li>
          </MDBTypography>
        </li>
      </MDBTypography>
    </MDBContainer>
  );
}

export default Project;