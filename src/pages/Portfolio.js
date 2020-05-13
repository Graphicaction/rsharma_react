// import React from "react";

import React, { useEffect, useState } from "react";
import API from "../utils/API";
import ProjectContext from "../utils/ProjectContext";
import CardContainer from '../components/CardContainer';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  
  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadProjects();
  }, []);

  function loadProjects() {
    API.getProjects()
      .then(projects => {
        console.log(projects);
        setProjects(projects);
      })
      .catch(err => console.log(err));
  }

  return (
    <ProjectContext.Provider value={{ projects }}>
      <div>
        <div className="border-top border-bottom border-dark text-center py-2 headings h1">
        My latest projects
        </div>
        <CardContainer />
      </div>
    </ProjectContext.Provider>
  );
}

export default Portfolio;
