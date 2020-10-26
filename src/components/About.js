import React from 'react'
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "primary.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function About() {
    const {
        file: {
          childImageSharp: { fluid },
        },
      } = useStaticQuery(query)
      
    return (
        <section className="about">
            <div className="about-wrapper container">
                <div className="about-left">
                    <Image fluid={fluid} className="my-image"/>
                </div>
                <div className="about-right">
                    <h1>I'm Steven Hendrix, Web Designer & Web Developer from United States, California.</h1>
                    <p>
                    I have rich experience in web site design & building and customization. Also I am good at html, css, javascript, wordpress, php, jquery, bootstrap. I love to talk with you about our unique approach. Feel free to contact me writing an email with your project idea.
                    </p>
                    <a href="/" alt="download resume">
                        <h4>Download Resume</h4>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
