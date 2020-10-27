import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ title, showLink, projects }) => {
  return <section className="section projects" id="projects">
    <div className="projects-wrap container">
    <Title title={title} />
      <div className="projects-wrap-item">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      <div>
        <button>
          <Link to="/projects">
            See All
          </Link>
        </button>
      </div>
    </div>
    {/* {
      showLink && <Link to="/projects" className="btn center-btn">
        Projects
      </Link>
    } */}
  </section>
}

export default Projects