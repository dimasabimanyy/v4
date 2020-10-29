import React, { useState } from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import '../css/style.scss'

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> 
      <div className="header-left" data-aos="fade-left" data-aos-duration="700" data-aos-delay="1350">
      </div>
      <div className="header-right">
        <Hero />
      </div>
    </header>
  )
}

export default Header
