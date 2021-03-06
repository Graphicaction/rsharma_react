// import React from "react";

import React, { useEffect, useState } from "react";
import API from "../utils/API";
import ProjectContext from "../utils/ProjectContext";
import CardContainer from '../components/CardContainer';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  
  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadProjects();
  }, []);

  function loadProjects() {
    API.getProjects()
      .then(projects => {
        setProjects(projects);
        setProject(projects[0]);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
    {projects.length ? (
      <ProjectContext.Provider value={{ project, projects }}>
        <div>
          <p className="border-top text-center py-2 headings h1">
          My latest projects
          </p>
          <CardContainer />
        </div>
      </ProjectContext.Provider>
    ): 
      (<h3>No Results to Display</h3>)
    }
    </div>
  );
}

export default Portfolio;
