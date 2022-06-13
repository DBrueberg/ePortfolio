// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - MainNav.js
// June 12, 2022
// Last Edited (Initials, Date, Edits):
//  (DAB, 6/13/2022, MDB Installed and MainNav Layout created)

// Using React library in order to build components 
// for the app and importing needed components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';

function MainNav() {
    // Will toggle the nav collapse to true or false
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MDBNavbar sticky expand='md' dark bgColor='dark'>
            <MDBContainer fluid>
                    <Link to="/" onClick={() => isOpen && setIsOpen(!isOpen)}>
                        Brueberg
                    </Link>
                
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={isOpen}>

                    <MDBNavbarNav className="d-flex flex-md-row justify-content-between overflow-hidden" right fullWidth={false}>
                        <MDBNavbarItem className="d-flex justify-content-center">
                            <Link className="mx-1" to="/about" onClick={() => isOpen && setIsOpen(!isOpen)}>
                                About
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="d-flex justify-content-center">
                            <Link className="mx-1" to="/project" onClick={() => isOpen && setIsOpen(!isOpen)}>
                                Projects
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="d-flex justify-content-center">
                            <Link className="mx-1" to="/education" onClick={() => isOpen && setIsOpen(!isOpen)}>
                                Education
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="d-flex justify-content-center">
                            <Link className="mx-1" to="/skill" onClick={() => isOpen && setIsOpen(!isOpen)}>
                                Skills
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="d-flex justify-content-center">
                            <Link className="mx-1" to="/interest" onClick={() => isOpen && setIsOpen(!isOpen)}>
                                Interests
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="d-flex justify-content-center">
                            <Link className="mx-1" to="/certification" onClick={() => isOpen && setIsOpen(!isOpen)}>
                                Certifications
                            </Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default MainNav;