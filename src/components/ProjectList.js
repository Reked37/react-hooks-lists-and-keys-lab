import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  console.log(projects);
  const itProjects= projects.map(projectObj=>{
    return( 
     <ProjectItem 
     key={projectObj.id}
     name={projectObj.name} 
     about={projectObj.about} 
     technologies={projectObj.technologies}/>
  )
  })

  return (
  <div id="projects">
    <h2>My Project</h2>
    <div id="projects-list">{itProjects}</div>
  </div>
  );
}

export default ProjectList;
