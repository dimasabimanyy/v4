import React, { useEffect } from "react"
import Title from "./Title"
import services from "../constants/services"
import Aos  from 'aos'
import "aos/dist/aos.css"

const Services = () => {

  useEffect(() => {
    Aos.init({})
  }, []);

  return (
    <section className="services section" id="services">
      <div className="services-wrapper container">
      <Title title="services" dataAos="fade-up" aosDuration="700" />
        <div className="services-wrapper-box">
        {services.map(service => {
          const { id, icon, title, text, aos, aosDelay, aosDuration } = service
          return <article key={id} className="service" data-aos={aos} data-aos-duration={aosDuration} data-aos-delay={aosDelay}>
            <span>
              {icon}
            </span>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        })}
        </div>
      </div>
    </section>
  )
}

export default Services
