import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "about",
    url: "#about",
    aosDelay: 850
  },
  {
    id: 2,
    text: "services",
    url: "#services",
    aosDelay: 1000
  },
  {
    id: 3,
    text: "projects",
    url: "#projects",
    aosDelay: 1150
  },
  {
    id: 4,
    text: "contact",
    url: "#contact",
    aosDelay: 1300
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url} className="nav-link">
        <span  data-aos="fade-in" data-aos-delay={link.aosDelay} data-aos-duration="700">
          {link.text}
        </span>
      </Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`nav-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
