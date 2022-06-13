// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - MainNav.js
// June 12, 2022
// Last Edited (Initials, Date, Edits):

import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink
  } from 'mdb-react-ui-kit';

function MainNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }


    return (
        <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarNav right fullWidth={false}>
            <MDBNavbarItem>
              <MDBNavbarLink href="">
              Hello
            </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    );
}

export default MainNav;