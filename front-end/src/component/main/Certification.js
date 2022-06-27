// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - Certification.js
// June 13, 2022
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';


function Certification() {
    return (
        <MDBContainer className="Certification">
            <MDBTypography className="text-center" variant='h1'>
                Certifications
            </MDBTypography>
            <MDBTypography className="mx-auto" listUnStyled style={{ maxWidth: "42rem" }}>
                <li className="mb-2">
                    <MDBTypography className="pb-0 m-0" style={{ fontSize: "large", fontWeight: "bold" }}>
                        LinkedIn Certifications
                    </MDBTypography>
                    <ul >
                        <li>
                            2022
                            <ul>
                                <li>
                                    Python Object-Oriented Programming for Java Developers
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                </li>
            </MDBTypography>
        </MDBContainer>
    );
}

export default Certification;