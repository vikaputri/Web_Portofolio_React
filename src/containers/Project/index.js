import React from "react";
import Header from "../../components/Header";
import { projectData } from "./project";

const Project = () => {
  return (
  	<div>
      <Header/> 
      <header className="py-4 px-5">
        <div class="d-flex justify-content-center">
          <i class="fas fa-laptop-code fa-3x"></i><h1 class="ms-3">My Project</h1>
        </div>
        <div className="py-3 container mt-4">
            <div className="row justify-content-center">
                {projectData.map((data, key) => {
                return (
                  <div class="col-sm-4 mb-5">
                    <div key={key} class="card h-100">
                      <img class="card-img-top" src={data.image} alt=""/>
                      <div class="card-body">
                        <h5 class="card-title fw-bolder">{data.title}</h5>
                        <p class="card-text">{data.description}</p>
                        <p class="card-text"><strong>Tech: </strong>{data.tech}</p>
                        <a href={data.url} class="btn btn-primary">Show</a>
                      </div>
                    </div>
                  </div>
                );
                })}
            </div>
        </div>
      </header>
	</div>
    );
  };

export default Project;