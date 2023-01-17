import React from "react";

function ProjectItem({ name, about, technologies }) {
  let tech = technologies.map((item) => 
  <span key={item}>{item}</span>)
  return (
    <div className="project-item">
      <h3 key="name">{name}</h3>
      <p key="about">{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
