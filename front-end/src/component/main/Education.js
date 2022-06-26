// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - Education.js
// June 13, 2022
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';


function Education() {
    return (
        <MDBContainer className="Education">
            <MDBTypography className="text-center" variant="h1">
                Education
            </MDBTypography>
            <MDBTypography className="mx-auto" listUnStyled style={{ maxWidth: "42rem" }}>
                <li className="mb-2">
                    <MDBTypography className="p-0 m-0" style={{ fontSize: "large", fontWeight: "bold" }}>
                        Concordia University-St. Paul
                    </MDBTypography>
                    <ul className="pb-0 mb-0">
                        <li>
                            2019-2022
                        </li>
                        <li>
                            Bachelors of Science in Computer Science with 4.0GPA
                        </li>
                    </ul>
                </li>
                <li className="mb-2">
                    <MDBTypography className="p-0 m-0" style={{ fontSize: "large", fontWeight: "bold" }}>
                        The University of Texas Pan American
                    </MDBTypography>
                    <ul>
                        <li>
                            2005-2007
                        </li>
                        <li>
                            Studied many branches of science that revolved around biology including virology, plant morphology, and mammalogy
                        </li>
                    </ul>
                </li>
                <li className="mb-2">
                    <MDBTypography className="p-0 m-0" style={{ fontSize: "large", fontWeight: "bold" }}>
                        South Texas College
                    </MDBTypography>
                    <ul>
                        <li>
                            2003-2005
                        </li>
                        <li>
                            Completed basic curriculum with focus on science
                        </li>
                    </ul>
                </li>
                <li className="mb-2">
                    <MDBTypography className="p-0 m-0" style={{ fontSize: "large", fontWeight: "bold" }}>
                        Science Academy of South Texas
                    </MDBTypography>
                    <ul>
                        <li>
                            1999-2003
                        </li>
                        <li>
                            Studied a vast array of science related subjects including programming in C++
                        </li>
                    </ul>
                </li>

            </MDBTypography>
        </MDBContainer>
    );
}

export default Education;