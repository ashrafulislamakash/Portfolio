import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './landingpage.css';
import {FaFacebookSquare, FaLinkedin, FaGithubSquare, FaYoutube} from "react-icons/fa";

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="ashraful.jpg"
              alt="Md. Ashraful Islam"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full-Stack Software Engineer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | UX/Ui | Android | myql</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ashraful-islam-akash/" rel="noopener noreferrer" target="_blank">
          <FaLinkedin/>
          </a>

           {/* Facebook */}
           <a href="https://www.facebook.com/ashrafulislam.akash.1232/" rel="noopener noreferrer" target="_blank" >
             <FaFacebookSquare/>
            
          </a>

          {/* Github */}
          <a href="https://github.com/ashrafulislamakash" rel="noopener noreferrer" target="_blank">
            <FaGithubSquare></FaGithubSquare>
           
          </a>

        

          {/* Youtube */}
          <a href="https://www.youtube.com/c/TechMasterBengali/videos?view_as=subscriber" rel="noopener noreferrer" target="_blank">
            <FaYoutube></FaYoutube>
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
