import React, { Component } from "react";
import "./aboutme.css";
import { Button, Container, Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="header_content">
            <h1 className="aboutme"> About Me </h1>
            <p className="why"> Why Choose Me?</p>
            <img src="line.png" alt="line"></img>
          </div>
        </Row>

        <div className="content">
          <Row>
            <Col>
              <img src="about.png"></img>
            </Col>

            <Col>
              <h1> Why Choose me ?</h1>
              <p>
                {" "}
                I am a highly tended Experienced professional and cooperative
                Software Engineer. I am working in graphic and UI Design for
                more than 4 Years. I assure you of a wide range of Quality IT
                services. I am also Funded Damsonsoft, which provides All of the
                IT services. I am an expert in Web, Mobile App Development, and
                UI design in the major filed. Moreover, I am a Learning person.
                My overall skill makes me a complete software developer, So you
                can hire me for your Project.
              </p>

            
                <h3 className = "feature_content">Here is Few Features: </h3>


              <div>

                <li>User Experience Design </li>
                <li>Cras justo odio</li>
                <li>Visual Commination Design </li>
                <li>Interaction Design </li>
                <li>Supper Support </li>
              </div>
              <Button className="button"> Hare me </Button>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default About;
