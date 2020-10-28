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
        { showLink && <button className="btn center-btn btn-all-project" data-aos="fade-up" data-aos-duration="700">
          <Link to="/projects">
            All Projects
          </Link>
        </button>}
      </div>
    </div>
  </section>
}

export default Projects