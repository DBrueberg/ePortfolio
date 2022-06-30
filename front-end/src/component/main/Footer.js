// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - Footer.js
// June 30, 2022
// Last Edited (Initials, Date, Edits):

// Using React library in order to build components
// for the app and importing needed components
import React from "react";
import { MDBContainer, MDBFooter, MDBIcon } from "mdb-react-ui-kit";
import "../../css/footer.css";

function Footer() {
    return (
        <MDBFooter
            className="Footer fixed-bottom"
            color="white"
            bgColor="dark"
            style={{ height: "3.3rem" }}
        >
            <MDBContainer
                className="d-flex justify-content-center justify-content-sm-end py-1"
                fluid
            >
                <a
                    className="btn btn-outline-light btn-floating m-1 footer-link"
                    href="https://www.linkedin.com/in/devin-brueberg/"
                    rel="noreferrer"
                    target="_blank"
                    role="button"
                >
                    <MDBIcon fab icon="linkedin-in" />
                </a>
                <a
                    className="btn btn-outline-light btn-floating m-1 footer-link"
                    href="https://github.com/DBrueberg"
                    rel="noreferrer"
                    target="_blank"
                    role="button"
                >
                    <MDBIcon fab icon="github" />
                </a>
                <a
                    className="btn btn-outline-light btn-floating m-1 footer-link"
                    href="mailto:brueberg&#64;gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    role="button"
                >
                    <MDBIcon far icon="envelope" />
                </a>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer;
