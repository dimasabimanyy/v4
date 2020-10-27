import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import Navbar from "../components/Navbar"

const ProjectsPage = ({
  data: {allStrapiProjects: {nodes:projects}}
}) => {
  return <Layout>
    <Navbar />
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
