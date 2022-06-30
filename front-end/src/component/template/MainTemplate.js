// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - MainTemplate.js
// June 13, 2022
// Last Edited (Initials, Date, Edits):
//  (DAB, 6/30/2022, Added bottom padding to template to account for footer)

// Using React library in order to build components
// for the app and importing needed components
import React from "react";
import MainNav from "../main/MainNav";
import App from "../../App";
import Footer from "../main/Footer";

function MainTemplate() {
    return (
        <div className="MainTemplate" style={{ paddingBottom: "4.3rem" }}>
            <MainNav />
            <App />
            <Footer />
        </div>
    );
}

export default MainTemplate;
