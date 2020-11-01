import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const ProjectsPage = ({
  data: {allStrapiProjects: {nodes:projects}}
}) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return <Layout>
    <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> 
    <SEO title="Projects" desc="Projects Dimas Abimanyu" />
    <section className="projects-page">
      <Projects projects={projects} title="All Projects" />
    </section>
  </Layout>
}

export const query = graphql`
{
  allStrapiProjects {
    nodes { 
      github
      id
      description
      title
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
