import React from "react";
import "./project.css";
import Project from "./Project";

function Projects() {
  return (
    <div className="project-section section" id="projects">
      <h2 style={{ textAlign: "center" }}>PROJECTS</h2>
      <br />
      <div className="m-container">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
