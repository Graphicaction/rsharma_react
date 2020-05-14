import React from "react";

const ProjectContext = React.createContext({
  id: "",
  name: "",
  image: "",
  deployLink: "",
  description: "",
  github: "",
  technologies: []
});

export default ProjectContext;