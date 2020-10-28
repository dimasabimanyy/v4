import React, { useState, useEffect } from "react"
// import "../css/main.css"
import Footer from "./Footer"
import Aos  from 'aos'
import "aos/dist/aos.css"
const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  
  useEffect(() => {
    Aos.init({})
  }, []);

  return (
    <>
      {children}
    <Footer />
    </>
  )
}

export default Layout
