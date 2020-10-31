import React from "react"
import SocialLinks from "../constants/socialLinks"
import Typical from 'react-typical'

const Hero = () => {  

  return ( 
  <section className="hero" id="hero">
    <div className="hero-wrapper" data-aos="fade-right" data-aos-duration="700" data-aos-delay="1350">
      <h1><span className="underlined underlined--offset--hero">Dimas Abimanyu</span></h1>
      {/* <h4>Software Engineer</h4> */}
      {/* <Typical
        loop={Infinity}
        wrapper="h4"
        steps={[
          'Full Stack Developer 💻',
          1700,
          'Open Sourcer 🔍',
          1700,
          'Content Creator 📹',
          1700
        ]}
      /> */}
      <SocialLinks styleClass="social-hero"></SocialLinks>
    </div>
  </section>
  )
}

export default Hero
