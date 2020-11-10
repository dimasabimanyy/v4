import React from "react"
import Image from "gatsby-image"
import MyTech from "../constants/myTech"
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
    <section className="about section" id="about">
      <div className="about-wrapper container">
        <div
          className="about-left"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <Image fluid={fluid} className="my-image" />
        </div>
        <div
          className="about-right"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <h1>
            <a class="underlined underlined--offset">
              Hello! I'm Dimas Abimanyu, a Software engineer from Medan,
              Indonesia.
            </a>
          </h1>
          <div className="about-right-desc">
            <p>
              Over the past 5 years, coding has developed into a passion of
              mine, specifically, in the realm of web development. I've
              dedicated my time to gaining proficiency in all intricacies of web
              development in order to better myself as a developer and problem
              solver.
            </p>
            {/* <p>
              I also like to teach about web development & programming in a simple and understandable way. That's why currently, i make <a href="https://www.youtube.com/channel/UC9RHCbCEj0UxDhj0y__MIRA?view_as=subscriber" target="_blank" className="under-yellow"> Night Coder</a> youtube channel where i build variety of projects on a daily basis.
            </p> */}
            <p>Here are a few technologies I've been working with recently:</p>
            <p className="current-tech">
              <MyTech styleClass="my-tech" />
            </p>
          </div>
          <a href="/" alt="download resume" className="btn btn-resume">
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
