// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - App.js
// June 9, 2022
// Last Edited (Initials, Date, Edits):
//  (DAB, 6/30/2022, Created initial Main page and content)

// Using React library in order to build components
// for the app and importing needed components
import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBRipple,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

function Main() {
    return (
        <MDBContainer className="Main">
            <MDBCard>
                <MDBRow className="pt-4 g-0">
                    <MDBCol className="m-auto" sm="6">
                        <MDBCard className="x-auto h-100">
                            <MDBRipple
                                className="bg-image hover-overlay"
                                rippleTag="div"
                            >
                                <MDBCardImage
                                    className="w-100"
                                    src="me.jpg"
                                    alt="Devin"
                                    fluid
                                    style={{ borderRadius: ".25rem" }}
                                />
                                <a>
                                    <div
                                        className="mask"
                                        style={{
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.1)",
                                        }}
                                    ></div>
                                </a>
                            </MDBRipple>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm="6">
                        <MDBCard className="mx-auto h-100">
                            <MDBCardBody>
                                <MDBCardHeader className="ps-0" tag="h1">
                                    Hello
                                </MDBCardHeader>
                                <MDBTypography>
                                    My name is Devin Brueberg and have held an
                                    interest in software development for many
                                    years now. My current focus is on full stack
                                    web development using mainly React but I am
                                    open to other projects. I have a wide array
                                    of development skills and am interested in
                                    anything related to development.
                                </MDBTypography>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
    );
}

export default Main;
