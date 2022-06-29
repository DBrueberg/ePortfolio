// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - Project.js
// June 13, 2022
// Last Edited (Initials, Date, Edits):
//  (DAB, 6/29/2022, Added in basic project layout and content)

// Using React library in order to build components
// for the app and importing needed components
import React from "react";
import { MDBContainer, MDBIcon, MDBTypography } from "mdb-react-ui-kit";

function Project() {
    return (
        <MDBContainer className="Project">
            <MDBTypography className="text-center" variant="h1">
                Project
            </MDBTypography>
            <MDBTypography
                className="mx-auto"
                listUnStyled
                style={{ maxWidth: "42rem" }}
            >
                <li className="mb-2">
                    <MDBTypography
                        className="mb-0 pb-0"
                        style={{ fontSize: "larger", fontWeight: "bold" }}
                    >
                        Restaurant Club
                    </MDBTypography>
                    <MDBTypography className="pt-0 mt-0" listUnStyled>
                        <li>Social Restaurant Review Web Application</li>
                        <li style={{ fontSize: "small" }}>
                            Current review sites do not allow for users to post
                            multiple reviews of the same restaurant resulting in
                            old and invalid information about the current
                            quality of a restaurant. Restaurant Club is an SPA
                            React Web Application designed to allow users to
                            leave multiple reviews allowing restaurants to adapt
                            and work off these current reviews to create a
                            better customer experience. Users can communicate
                            with one another through the chat system or by
                            searching for their favorite users reviews. Happy
                            eating!
                        </li>
                        <li>
                            <a
                                rel="noreferrer"
                                href="https://restaurant-club.netlify.app/"
                                target="_blank"
                            >
                                <MDBIcon className="me-1" fas icon="link" />
                            </a>
                            <a
                                rel="noreferrer"
                                href="https://github.com/DBrueberg/restaurantClub"
                                target="_blank"
                            >
                                <MDBIcon className="me-1" fab icon="github" />
                            </a>
                        </li>
                    </MDBTypography>
                </li>
            </MDBTypography>
        </MDBContainer>
    );
}

export default Project;
