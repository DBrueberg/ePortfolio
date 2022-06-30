// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - Interest.js
// June 13, 2022
// Last Edited (Initials, Date, Edits):
//  (DAB, 6/30/2022, Added in basic content and layout)

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
    MDBRipple,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import "../../css/interest.css";

function Interest() {
    return (
        <MDBContainer className="Interest">
            <MDBTypography className="text-center" variant="h1">
                Interests
            </MDBTypography>

            <MDBRow className="g-4">
                <MDBCol sm="6" lg="4">
                    <MDBCard
                        className="mx-auto text-white h-100"
                        background="dark"
                    >
                        <MDBRipple
                            className="bg-image hover-overlay"
                            rippleTag="div"
                        >
                            <MDBCardImage
                                src="family.jpg"
                                position="top"
                                alt="Family"
                            />
                            <a>
                                <div
                                    className="mask"
                                    style={{
                                        backgroundColor:
                                            "rgba(251, 251, 251, 0.1",
                                    }}
                                />
                            </a>
                        </MDBRipple>

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
                <MDBCol sm="6" lg="4">
                    <MDBCard
                        background="dark"
                        className="mx-auto text-white h-100"
                    >
                        <MDBRipple
                            className="bg-image hover-overlay"
                            rippleTag="div"
                        >
                            <MDBCardImage
                                src="code.jpg"
                                position="top"
                                alt="Coding"
                            />
                            <a>
                                <div
                                    className="mask"
                                    style={{
                                        backgroundColor:
                                            "rgba(251, 251, 251, 0.1",
                                    }}
                                />
                            </a>
                        </MDBRipple>

                        <MDBCardBody>
                            <MDBCardTitle className="text-center">
                                Software Development
                            </MDBCardTitle>
                            <MDBCardText>
                                I have always enjoyed computers since I was
                                young. That interest has developed into a love
                                for creating various programs using many
                                different languages and tools. I have found that
                                programming is very rewarding and is in fact a
                                branch of my favorite subject, science.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm="6" lg="4">
                    <MDBCard
                        background="dark"
                        className="mx-auto text-white h-100"
                    >
                        <MDBRipple
                            className="bg-image hover-overlay"
                            rippleTag="div"
                        >
                            <MDBCardImage
                                src="brain.jpg"
                                position="top"
                                alt="Learning"
                            />
                            <a>
                                <div
                                    className="mask"
                                    style={{
                                        backgroundColor:
                                            "rgba(251, 251, 251, 0.1",
                                    }}
                                />
                            </a>
                        </MDBRipple>

                        <MDBCardBody>
                            <MDBCardTitle className="text-center">
                                Learning
                            </MDBCardTitle>
                            <MDBCardText>
                                I enjoy learning new things all the time. There
                                is not a day that goes by that I do not develop
                                an interest in a topic and research more about
                                it. Economics, coding, and science are what I
                                mainly indulge myself in.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm="6" lg="4">
                    <MDBCard
                        background="dark"
                        className="mx-auto text-white h-100"
                    >
                        <MDBRipple
                            className="bg-image hover-overlay"
                            rippleTag="div"
                        >
                            <MDBCardImage
                                src="croixRiver.jpg"
                                position="top"
                                alt="Outdoors"
                            />
                            <a>
                                <div
                                    className="mask"
                                    style={{
                                        backgroundColor:
                                            "rgba(251, 251, 251, 0.1",
                                    }}
                                />
                            </a>
                        </MDBRipple>

                        <MDBCardBody>
                            <MDBCardTitle className="text-center">
                                Outdoors
                            </MDBCardTitle>
                            <MDBCardText>
                                The warmer parts of the year are my favorite. I
                                try to get outside whenever I can. Though I
                                enjoy countless activities my main outdoor
                                hobbies are cycling, kayaking, swimming, and
                                exploring parks.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm="6" lg="4">
                    <MDBCard
                        background="dark"
                        className="mx-auto text-white h-100"
                    >
                        <MDBRipple
                            className="bg-image hover-overlay"
                            rippleTag="div"
                        >
                            <MDBCardImage
                                src="running.jpg"
                                position="top"
                                alt="Exercise"
                            />
                            <a>
                                <div
                                    className="mask"
                                    style={{
                                        backgroundColor:
                                            "rgba(251, 251, 251, 0.1",
                                    }}
                                />
                            </a>
                        </MDBRipple>

                        <MDBCardBody>
                            <MDBCardTitle className="text-center">
                                Exercise
                            </MDBCardTitle>
                            <MDBCardText>
                                I both enjoy and see the need in keeping in
                                keeping fit. My favorite exercises are
                                stationary bike with some resistance training.
                                In my exercises simply staying healthy is my
                                main goal.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm="6" lg="4">
                    <MDBCard
                        background="dark"
                        className="mx-auto text-white h-100"
                    >
                        <MDBRipple
                            className="bg-image hover-overlay"
                            rippleTag="div"
                        >
                            <MDBCardImage
                                src="gaming.jpg"
                                position="top"
                                alt="Gaming"
                            />
                            <a>
                                <div
                                    className="mask"
                                    style={{
                                        backgroundColor:
                                            "rgba(251, 251, 251, 0.1",
                                    }}
                                />
                            </a>
                        </MDBRipple>

                        <MDBCardBody>
                            <MDBCardTitle className="text-center">
                                Gaming
                            </MDBCardTitle>
                            <MDBCardText>
                                Playing video games is another enjoyment of
                                mine. They provide a cheap and fun form of
                                entertainment that challenges both mind and
                                reflexes. Some of my favorites include LOL, WOW,
                                FF11, and FF14. Someday I hope to play Pantheon:
                                Rise of the Fallen if it is ever released!
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Interest;
