import React from "react";
import "./project.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

function Project() {
  return (
    <div className="container">
      <div className="title_des">
        <br />
        <h4>Project 1</h4>
        <br />

        <p className="proj-para">
          animated underline effects using pseudo-elements and/or borders. Try
          hovering on the examples in this demo
        </p>
      </div>
      <div className="stack">
        <p> html css javascript</p>
      </div>
      <div className="links">
        <a className="a">
          <GitHubIcon />
        </a>
        <a className="a">
          <OpenInNewIcon />
        </a>
      </div>
    </div>
  );
}

export default Project;
