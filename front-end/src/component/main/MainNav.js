// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - MainNav.js
// June 12, 2022
// Last Edited (Initials, Date, Edits):
//  (DAB, 6/13/2022, MDB Installed and MainNav Layout created)

// Using React library in order to build components 
// for the app and importing needed components
import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarBrand,
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
                <MDBNavbarBrand href="">
                    Brueberg
                </MDBNavbarBrand>
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
                    <MDBNavbarItem>
                        <MDBNavbarLink href="/about">
                            About
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href="/project">
                            Projects
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href="/education">
                            Education
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href="/skill">
                            Skills
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href="/interest">
                            Interests
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href="/certification">
                            Certifications
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default MainNav;