import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, github, title, url, stack, image, index }) => {
  return <div className="project" >
    <div className="project-left">
      <Image fluid={image.childImageSharp.fluid} className="project-img" /> 
    </div>
    <div className="project-right">
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
        <a href={github}>
          <FaGithubSquare className="project-icon" />
        </a>
        <a href={url}>
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </div>
    {/* 
    <div className="project-info">
      <span className="project-number">0{index + 1}.</span>
      <h3>{title}</h3>
      <p className="project-desc">
        {description}
      </p>
      <div className="project-stack">
        
      </div>
      <div className="project-links">
        
      </div>
    </div> */}
  </div>
}

Project.propTypes = {}

export default Project
