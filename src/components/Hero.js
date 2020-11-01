import React from "react"
import SocialLinks from "../constants/socialLinks"
import Typewriter from 'typewriter-effect';

const Hero = () => {  

  return ( 
  <section className="hero" id="hero">
    <div className="hero-wrapper" data-aos="fade-right" data-aos-duration="700" data-aos-delay="1350">
      <h1><span className="underlined underlined--offset--hero">Dimas Abimanyu</span></h1>
      <h4>
      <Typewriter
        options={{
          strings: ['Full Stack Developer 💻', 'Freelancer' ,'Open Sourcer 🔍', 'Content Creator 📹'],
          autoStart: true,
          loop: true
        }}
      />
      </h4>
      <SocialLinks styleClass="social-hero"></SocialLinks>
    </div>
  </section>
  )
}

export default Hero
