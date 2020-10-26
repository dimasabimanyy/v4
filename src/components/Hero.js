import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {  

  return ( 
  <section className="hero">
    {/* <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
            <h1>I'm Dimas</h1>
            <h4>Freelance web and mobile UI/UX designer</h4>
            <Link to="/contact" className="btn">contact me</Link>
            <SocialLinks />
        </div>
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>  */}
    <div className="hero-wrapper">
      <h1><span>Dimas</span> <br></br> <span>Abimanyu</span></h1>
      <h4>Software Engineer</h4>
      <SocialLinks styleClass="social-hero"></SocialLinks>
        {/* <Image fluid={fluid} className="hero-img"/> */}
        {/* <h3 className="im-dimas">Hi, I'm Dimas</h3>
        <div className="hero-info">
          <h1>Building digital <br></br> products, brands and <br></br> experience.</h1>
        </div>
        <div className="hero-job">
        <h3>
          A <span>Full Stack web developer</span> in Indonesia. I specialize in React Js, Wordpress, Responsive web design and Visual Development.
        </h3>
        <button className="btn btn-connect">
          <a href="">
            Connect with me
          </a>
        </button>
        </div> */}
    </div>
  </section>
  )
}

export default Hero
