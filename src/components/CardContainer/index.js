/* eslint-disable no-lone-blocks */
import React, { useContext } from "react";
import  Row from '../Row';
import ProjectContext from '../../utils/ProjectContext';

function CardContainer() {
  //Assigning projects 
  const { projects } = useContext(ProjectContext);
    return(
      <div>
        {/* Displaying all projects in card's format*/}
        <div className="row d-flex justify-content-center">
          {projects.map(project => (
          <div className="col-sm-5 col-md-5 col-lg-5 my-4" key={project.id}>
              <div className="card border-dark text-center">
                <a rel="noopener noreferrer" href={project.deployLink} target="_blank">
                    <img src={require(`../../images/${project.image}`)} className="card-img" alt="budget-tracker" key={project.name} /></a>
                <div className="card-body">
                  <h4 className="card-title">{project.name}</h4>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text mt-2"><button className="btn">Technologies Used</button></p>
                  <div className="card-text mt-1 d-flex justify-content-center">
                    <Row>
                      {project.technologies.map((technology) =>(
                        <span className="tech-btn px-2 m-1" key={technology}>{technology}</span>
                      ))
                      }
                    </Row>
                  </div>
                  <p className="card-text"><a rel="noopener noreferrer" href={project.github} target="_blank">Github Repository</a></p>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    )
  }
  
  export default CardContainer;
