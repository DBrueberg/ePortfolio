// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - MainNav.js
// June 12, 2022
// Last Edited (Initials, Date, Edits):

import React, { Component, useState } from 'react';
// import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarBrand } from "mdbreact";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBSideNav
} from 'mdbreact';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'

function MainNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }


    return (
        <Router>
        <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">Navbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink to="">
                            One
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <NavLink to="">
                            Second
                        </NavLink>
                            
                    </MDBNavItem>
                    <MDBNavItem>
                        Three
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <span className="mr-2">Dropdown</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
        </Router>



        // <MDBNavbar>
        //     <MDBNavbarBrand color="light">
        //         Test Navbar
        //     </MDBNavbarBrand>
        //     <MDBNavbarNav right>
        //         <MDBNavItem>
        //         <MDBNavLink to="#!">Features</MDBNavLink>
        //         </MDBNavItem>
        //         <MDBNavItem>
        //             Second
        //         </MDBNavItem>
        //         <MDBNavItem>
        //             Third
        //         </MDBNavItem>
        //         <MDBNavItem>
        //             Fourth
        //         </MDBNavItem>
        //     </MDBNavbarNav>
        // </MDBNavbar>
    );
}

export default MainNav;