import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import { Link } from 'gatsby'

const Navbar = ({ toggleSidebar, isOpen }) => {
  return <nav className="navbar" data-aos="fade-down" data-aos-duration="700">
    <div className="nav-center">
      <div className="logo">
        <Link to="/">
          D'Abimanyu
        </Link>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
    <div className="three col-nav" onClick={toggleSidebar}>
        <div className={`hamburger ${isOpen ? "is-active" : ""}`} id="hamburger-6">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
  </nav>
}

export default Navbar
