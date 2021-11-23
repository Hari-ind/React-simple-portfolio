import React from "react";
import "./about.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function About() {
  return (
    <div className="about-section section" id="about">
      <h1 className="abt-heading">
        Hi , I am
        <span> Jhon Smith.</span>
      </h1>
      <h2 className="abt-sheading">A Front End Engineer</h2>
      <p className="abt-para">
        Media queries are a popular technique for delivering a tailored style
        sheet to different devices. To demonstrate a simple example, we can
        change the background color for different devices
      </p>
      <div className="section-icons">
        <div>
          <button className="r-btn">resume</button>
        </div>
        <div>
          <GitHubIcon />
        </div>
        <div>
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default About;
