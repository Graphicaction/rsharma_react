import React, { useContext } from "react";
import  Row from '../Row';
import ProjectContext from '../../utils/ProjectContext';

function CardContainer() {
    const { project } = useContext(ProjectContext);
    return (
        <div className="card border-0 text-center">
        <a rel="noopener noreferrer" href={project.deployLink} target="_blank">
            <img src={project.image} className="card-img" alt="budget-tracker" />
        </a>
        <div className="card-body">
            <h4 className="card-title">{project.name}</h4>
            <p className="card-text">{project.description}</p>
            <p className="card-text mt-2"><button className="btn">Technologies Used</button></p>
            <div className="card-text mt-1 d-flex justify-content-center">
              <Row>
                <span className="tech-btn px-2 m-1">Node js</span>
                <span className="tech-btn px-2 m-1">HTML</span>
                <span className="tech-btn px-2 m-1">CSS</span>
                <span className="tech-btn px-2 m-1">JavaScript</span>
                <span className="tech-btn px-2 m-1">Chart.js</span>
                <span className="tech-btn px-2 m-1">PWA</span>
              </Row>
            </div>
            <p className="card-text"><a rel="noopener noreferrer" href={project.github} target="_blank">Github Repository</a></p>
        </div>
    </div>
    );
  }
  
  export default CardContainer;
