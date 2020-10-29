import React, { useState, useEffect } from "react"
// import "../css/main.css"
import Footer from "./Footer"
import Aos  from 'aos'
import "aos/dist/aos.css"
const Layout = ({ children }) => {
  
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
