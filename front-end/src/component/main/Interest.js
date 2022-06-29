// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - Interest.js
// June 13, 2022
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components
// for the app and importing needed components
import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

function Interest() {
    return (
        <MDBContainer className="Interest">
            <MDBTypography className="text-center" variant="h1">
                Interests
            </MDBTypography>
            <MDBRow className="row-cols-sm-6 row-cols-md-3 g-sm-1 g-4">
                <MDBCol>
                    <MDBCard
                        background="dark"
                        className="text-white h-100"
                        style={{ maxWidth: "22rem" }}
                    >
                        <MDBCardImage
                            src="graduate.jpg"
                            position="top"
                            alt="Family"
                        />
                        <MDBCardBody>
                            <MDBCardTitle className="text-center">
                                Family
                            </MDBCardTitle>
                            <MDBCardText>
                                My family is what I love the most. My boy and
                                girl are always so full of energy and it is a
                                lot of fun teaching and playing with them. Their
                                personalities are a lot like mine so we enjoy
                                joking around with one another and just laughing
                                our free time away.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard
                        background="dark"
                        className="text-white h-100"
                        style={{ maxWidth: "22rem" }}
                    >
                        <MDBCardImage
                            src="graduate.jpg"
                            position="top"
                            alt="Family"
                        />
                        <MDBCardBody>
                            <MDBCardTitle className="text-center">
                                Family
                            </MDBCardTitle>
                            <MDBCardText>
                                My family is what I love the most. My boy and
                                girl are always so full of energy and it is a
                                lot of fun teaching and playing with them. Their
                                personalities are a lot like mine so we enjoy
                                joking around with one another and just laughing
                                our free time away.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard
                        background="dark"
                        className="text-white h-100"
                        style={{ maxWidth: "22rem" }}
                    >
                        <MDBCardImage
                            src="graduate.jpg"
                            position="top"
                            alt="Family"
                        />
                        <MDBCardBody>
                            <MDBCardTitle className="text-center">
                                Family
                            </MDBCardTitle>
                            <MDBCardText>
                                My family is what I love the most. My boy and
                                girl are always so full of energy and it is a
                                lot of fun teaching and playing with them. Their
                                personalities are a lot like mine so we enjoy
                                joking around with one another and just laughing
                                our free time away.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Interest;
