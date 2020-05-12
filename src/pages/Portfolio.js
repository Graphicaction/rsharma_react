import React, { useEffect, useState } from "react";
import API from "../utils/API";
import ProjectContext from "../utils/ProjectContext";
import Home from "../components/Home";
import Row from "../components/Row";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  
  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadProjects();
  }, []);

  function loadProjects() {
    API.getProjects()
      .then(projects => {
        setProjects(projects);
      })
      .catch(err => console.log(err));
  }

  return (
    <ProjectContext.Provider value={{ projects }}>
      <div>
        <h1 className="text-center">My latest Projects</h1>
        <Row>
          <Home />
        </Row>
      </div>
    </ProjectContext.Provider>
  );
}

export default Portfolio;
