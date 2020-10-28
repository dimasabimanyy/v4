import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {  

  return ( 
  <section className="hero">
    <div className="hero-wrapper">
      <h1><span>Dimas</span> <br></br> <span>Abimanyu</span></h1>
      <h4>Software Engineer</h4>
      <SocialLinks styleClass="social-hero"></SocialLinks>
    </div>
  </section>
  )
}

export default Hero
