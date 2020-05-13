import React from "react";

const Portfolio = () => (
  <div>
    <h1>Portfolio Page</h1>
    <p>
      Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
      ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
      quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
      imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p>
  </div>
);

// import React, { useEffect, useState } from "react";
// import API from "../utils/API";
// import ProjectContext from "../utils/ProjectContext";
// import Row from "../components/Row";

// function Portfolio() {
//   const [projects, setProjects] = useState([]);
  
//   // When the component mounts, a call will be made to get random users.
//   useEffect(() => {
//     loadProjects();
//   }, []);

//   function loadProjects() {
//     API.getProjects()
//       .then(projects => {
//         setProjects(projects);
//       })
//       .catch(err => console.log(err));
//   }

//   return (
//     <ProjectContext.Provider value={{ projects }}>
//       <div>
//         <h1 className="text-center">My latest Projects</h1>
//         <Row>
//           <div>Welcome to react portfolio!</div> 
//         </Row>
//       </div>
//     </ProjectContext.Provider>
//   );
// }

export default Portfolio;
