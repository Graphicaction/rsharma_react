import React from "react";

const ProjectContext = React.createContext({
  name: "",
  image: "",
  deployLink: "",
  description: "",
  github: "",
  technologies: []
});

export default ProjectContext;