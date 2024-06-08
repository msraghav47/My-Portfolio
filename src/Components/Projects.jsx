import React from "react";
import project from "./data/projects.json";
const Projects = () => {
  return (
    <div className="container my-5 projects" id="projects">
      <h1 style={{ textShadow: "2px 2px rgb(255,0,0)" }}>Projects</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {project.map((p) => (
          <div
            className="my-5 col-md-4 col-sm-6 col-lg-3 mx-5"
            data-aos="flip-left"
            data-aos-duration="1000"
            key={p.key}>
            <div
              className="card bg-dark text-light"
              style={{
                width: "280px",
                border: "3px solid red",
                borderRadius: "10px",
                boxShadow: "5px 5px 10px 10px rgba(255, 0, 0,0.7)",
              }}>
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src={p.imageSrc}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "250px",
                    height: "180px",
                    border: "2px solid red",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
                <a href={p.demo} className="btn btn-primary mx-4">
                  Demo
                </a>
                <a href={p.source} className="btn btn-warning mx-4">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
