import React, { useEffect } from 'react'
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Aos  from 'aos'
import "aos/dist/aos.css"

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

    useEffect(() => {
      Aos.init({})
    }, []);
      
    return (
        <section className="about">
            <div className="about-wrapper container">
                <div className="about-left" data-aos="fade-right" data-aos-duration="700">
                    <Image fluid={fluid} className="my-image"/>
                </div>
                <div className="about-right" data-aos="fade-left" data-aos-duration="700">
                    <h1>I'm Dimas Abimanyu, Web Designer & Web Developer from United States, California.</h1>
                    <p>
                    I have rich experience in web site design & building and customization. Also I am good at html, css, javascript, wordpress, php, jquery, bootstrap. I love to talk with you about our unique approach. Feel free to contact me writing an email with your project idea.
                    </p>
                    <a href="/" alt="download resume" className="btn btn-resume">
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
