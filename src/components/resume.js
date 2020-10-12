import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="ashraful.jpg"
                alt="Ashraful Islam"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Md Ashraful Islam</h2>
            <h4 style={{ color: "white" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I am a highly tended Experienced professional and cooperative
              Software Engineer. I am working in graphic and UI Design for more
              than 4 Years. I assure you of a wide range of Quality IT services.
              I am also Funded Damsonsoft, which provides All of the IT
              services. I am an expert in Web, Mobile App Development, and UI
              design in the major filed. Moreover, I am a Learning person. My
              overall skill makes me a complete software developer, So you can
              hire me for your Project.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>153/1 Khathalbagan, Panthpath, Dhaka-1205</p>
            <h5>Phone</h5>
            <p>+8801748167353</p>
            <h5>Email</h5>
            <p>ashrafulislam.eng@gmail.com</p>
            <h5>Web</h5>
            <p>
              {" "}
              <a href="//www.damsonsoft.com" target="_blank">www.damsonsoft.com</a>
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2021}
              schoolName="World University of Bangladesh"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Jhenaidah Polytechnec institute"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2009}
              endYear={2014}
              schoolName="Dattapara High School"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
