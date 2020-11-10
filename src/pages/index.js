import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import Header from "../components/Header"
import About from "../components/About"
import Services from "../components/Services"
import FormContact from "../components/FormContact"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    // allStrapiBlogs: {nodes:blogs}
  } = data

  return (
    <Layout>
      <SEO title="Home" description="Homepage Portfolio Dimas Abimanyu" />
      <Header />
      <About />
      <Services />
      <Projects projects={projects} title="Featured Projects" showLink />
      <FormContact />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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
