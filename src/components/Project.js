import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithub, FaLink } from "react-icons/fa"
const Project = ({ description, github, title, url, stack, image, index }) => {
  return <div className="project" >
    <div className="project-left" data-aos="fade-right" data-aos-duration="700">
      <a href={url} alt={title} target="_blank">
       <Image fluid={image.childImageSharp.fluid} className="project-img" /> 
      </a>
    </div>
    <div className="project-right" data-aos="fade-left" data-aos-duration="700">
      <h5>Featured Project</h5>
      <h2>{title}</h2>
      <div className="project-info">
        <p>{description}</p>
      </div>
      <div className="project-tech">
        {stack.map((item) => {
          return <span key={item.id}>{item.title}</span>
        })}
      </div>
      <div className="project-links">
        <a href={github} className="project-link-icon">
          <div>
            <FaGithub className="project-icon" />
          </div>
        </a>
        <a href={url}  className="project-link-icon">
          <div>
            <FaLink className="project-icon" />
          </div>
        </a>
      </div>
    </div>
  </div>
}

Project.propTypes = {}

export default Project
