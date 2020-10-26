import React, { useState } from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import '../css/style.scss'

const query = graphql`
  {
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function Header() {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      <Navbar toggleSidebar={toggleSidebar} />
        <div className="header-left">

        </div>
        <div className="header-right">
          <Hero />
        </div>
    </header>
  )
}

export default Header
