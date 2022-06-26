// Initially Created by: Devin Brueberg
// Devin's E-Portfolio
// E-Portfolio - About.js
// June 13, 2022
// Last Edited (Initials, Date, Edits):
//  (DAB, 06/22/2022, Added in content)

// Using React library in order to build components
// for the app and importing needed components
import React from "react";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";

function About() {
    return (
        <MDBContainer className="About">
            <MDBTypography variant="h1" className="text-center">
                About
            </MDBTypography>
            <main className="mx-auto" style={{maxWidth: "42rem"}}>
                <MDBTypography>
                    I currently live in Minnesota and am the father of two
                    children. In 2008 I moved here from Texas and have been
                    working for the railroad ever since. For fun I enjoy playing
                    with the kids, kayaking, biking, games, learning new things,
                    programming, and a wide range of other activities. One
                    activity I hope to get back into someday is 3D RC helicopter
                    flying. I really enjoy the mind stimulating challenge of
                    flying in all orientations. Anything that is a challenge is
                    what excites me. I am both very good and enjoy solving
                    complex problems / overcoming challenges which is why my
                    hobbies and career choices reflect this aspect of my
                    personality.
                </MDBTypography>
                <MDBTypography>
                    Over the years computers have always been a solid interest
                    of mine that only grows as they do. Because of this, in 2019
                    I decided to go to college and since have finished my
                    Bachelors of Science in Computer Science at the top of my
                    class. Though I am interested in any and all fields, my
                    current main focus currently is on concreting my knowledge
                    of React web development as well as Java. At this point I
                    have a very good full stack understanding of how to create
                    responsive web applications and am having fun experimenting
                    with different frameworks.
                </MDBTypography>
                <MDBTypography>
                    I would very much like to find a company that would take me
                    on part time at first with the possibility to move into a
                    full time position if we work well together. Even if my
                    experience doesn't fit what you want, I am a fast learner
                    that will enjoy the challenge and appreciate the
                    opportunity. For those wondering why not start full time, as
                    an individual who excels at analytical thinking and problem
                    solving it is illogical and impractical to fully jump to a
                    new career when income is needed and exists to take care of
                    my family. I live life in the same way I program, if there
                    is something to build/repair you start small and scale it up
                    from there! My end goal is a full time position as a
                    software engineer.
                </MDBTypography>
            </main>
        </MDBContainer>
    );
}

export default About;
