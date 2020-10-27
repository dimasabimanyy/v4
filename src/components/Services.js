import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="services-wrapper container">
      <Title title="services" />
        <div className="services-wrapper-box">
        {services.map(service => {
          const { id, icon, title, text } = service
          return <article key={id} className="service">
            <span>
              {icon}
            </span>
            <h4>{title}</h4>
            <div className="underline"></div>
            <p>{text}</p>
          </article>
        })}
        </div>
      </div>
    </section>
  )
}

export default Services
