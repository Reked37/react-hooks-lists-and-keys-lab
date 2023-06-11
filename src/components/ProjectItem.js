import React from "react";
import ProjectList from "./ProjectList";
import user from "../data/user";

function ProjectItem({ name, about, technologies }) {
  const itTechnologies=technologies.map(techElement=>{
    return<span key={techElement}>{techElement}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {itTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;
