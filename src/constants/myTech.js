import React from "react"
import {
    FaCode
} from "react-icons/fa"

const data = [
    {
        id: 1,
        name: "React Js"
    },
    {
        id: 2,
        name: "Gatsby Js"
    },
    {
        id: 3,
        name: "Javascript (ES6+)"
    },
    {
        id: 4,
        name: "HTML & (S)CSS"
    },
    {
        id: 5,
        name: "Bootstrap"
    },
    {
        id: 6,
        name: "Laravel"
    },
    {
        id: 6,
        name: "Wordpress"
    }
]

const links = data.map(link => {
    return (
      <span key={link.id} className="my-tech-item">
            {link.name}, 
      </span>
    )
  })

export default ({ styleClass }) => {
    return (
        <div className={styleClass}>
            {links}
        </div>
    )
}