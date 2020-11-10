import React from "react"
import { FaCode, FaDesktop, FaWordpress } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Web Development",
    text: `Want to turn your idea into the next big thing?  I design and develop with your business in mind, putting you in control of your content.`,
    aos: "fade-up",
    aosDelay: "0",
    aosDuration: "700"
  },
  {
    id: 2,
    icon: <FaDesktop className="service-icon" />,
    title: "PSD to HTML",
    text: `Do you have a nice design in photoshop or even sketch? Contact me and I'll convert them into fully responsive, nice looking websites!`,
    aos: "fade-up",
    aosDelay: "200",
    aosDuration: "700"
  },
  {
    id: 3,
    icon: <FaWordpress className="service-icon" />,
    title: "Wordpress",
    text: `Specialists in CMS web development using Wordpress. Millions of website today are built on top of Wordpress, yours can become the next one!`,
    aos: "fade-up",
    aosDelay: "400",
    aosDuration: "700"
  }
]
