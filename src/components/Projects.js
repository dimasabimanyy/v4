import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ title, showLink, projects }) => {
  return <section className="section projects" id="projects"> 
    <div className="projects-wrap container">
    <Title title={title} dataAos="fade-in" aosDuration="700" />
      <div className="projects-wrap-item">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      <div>
        { showLink && 
          <Link to="/projects">
            <button className="btn center-btn btn-all-project" data-aos="fade-up" data-aos-duration="4000">
            All Projects
            </button>
          </Link>
        }
      </div>
    </div>
  </section>
}

export default Projects