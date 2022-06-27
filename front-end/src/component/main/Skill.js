// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - Skill.js
// June 13, 2022
// Last Edited (Initials, Date, Edits):
//  (DAB, 6/27/2022, Added in basic content/layout)

// Using React library in order to build components 
// for the app and importing needed components
import React from 'react';
import { MDBTypography, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';


function Skill() {
    return (
        <MDBContainer className="Skill">
            <MDBTypography className="text-center" variant='h1'>
                Skills
            </MDBTypography>
            <MDBTypography className="mx-auto" listUnStyled style={{ maxWidth: "42rem" }}>
                <li className="mb-2">
                    <MDBTypography className="pb-0 m-0 mb-1" style={{ fontSize: "larger", fontWeight: "bold" }}>
                        Programming Languages and Tools
                    </MDBTypography>
                    <MDBIcon className="me-1" fab icon="react" size="2x" />
                    <MDBIcon className="me-1" fab icon="npm" size="2x" />
                    <MDBIcon className="me-1" fab icon="bootstrap" size="2x" />
                    <MDBIcon className="me-1" fab icon="css3" size="2x" />
                    <MDBIcon className="me-1" fab icon="html5" size="2x" />
                    <MDBIcon className="me-1" fab icon="js" size="2x" />
                    <MDBIcon className="me-1" fab icon="java" size="2x" />
                    <MDBIcon className="me-1" fab icon="github" size="2x" />
                    <MDBIcon fab icon="slack" size="2x" />
                    <ul >
                        <li className="mt-2">
                            Language
                            <ul style={{ fontSize: "small"}} >
                                <li>
                                    Java, React, HTML, CSS, JavaScript, SQL
                                </li>
                            </ul>
                        </li>
                        <li className="mt-2">
                            Framework
                            <ul style={{ fontSize: "small"}} >
                                <li>
                                    NPM, Express
                                </li>
                            </ul>
                        </li>
                        <li className="mt-2">
                            Library
                            <ul style={{ fontSize: "small"}} >
                                <li>
                                    React-Redux, Redux-Thunk, React-Bootstrap, MDB-React, Axios, Sequelize
                                </li>
                            </ul>
                        </li>
                        <li className="mt-2">
                            IDE
                            <ul style={{ fontSize: "small"}} >
                                <li>
                                    Visual Studio Code, IntelliJ, Eclipse, Wing Personal, MySQL Workbench
                                </li>
                            </ul>
                        </li>
                        <li className="mt-2">
                            Work Flow
                            <ul style={{ fontSize: "small"}} >
                                <li>
                                    Slack, Git, GitHub
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </MDBTypography>


        </MDBContainer>
    );
}

export default Skill;