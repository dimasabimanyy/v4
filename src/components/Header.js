import React, { useState, useEffect } from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import img from "../assets/hero-bg.jpg"
import '../css/style.scss'

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  // Parallax effect
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="header" id="header">
      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> 
      <div className="header-left" data-aos="fade-left" data-aos-duration="700" data-aos-delay="1350">
        <img
            src={img}
            alt="Hero Background"
            className="parallax"
            style={{
              transform: `translateY(${offset * 0.7}px)`,
            }}
          />
      </div>
      <div className="header-right">
        <Hero />
      </div>
    </header>
  )
}

export default Header
