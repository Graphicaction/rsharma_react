/* eslint-disable no-lone-blocks */
import React, { useContext } from "react";
import  Row from '../Row';
import ProjectContext from '../../utils/ProjectContext';

function CardContainer() {
    const { projects } = useContext(ProjectContext);
    
    return(
      <div>
        {projects.map(project => (
          <div className="col-sm-5 col-md-5 col-lg-5">
            <div className="card border-0 text-center" key={project.id}>
              <a rel="noopener noreferrer" href={project.deployLink} target="_blank">
                  <img src={require(`../../images/${project.image}`)} className="card-img" alt="budget-tracker" key={project.name} />
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
          </div>
        ))
        }
      </div>
    )
  }
  
  export default CardContainer;
