import React from "react"
import {
  FaLinkedinIn,
  FaCodepen,
  FaGithub,
  FaTwitter,
  FaYoutube
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://www.youtube.com",
  },
  {
    id: 2,
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaCodepen className="social-icon"></FaCodepen>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://www.github.com",
  },
  {
    id: 5,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://www.twitter.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
