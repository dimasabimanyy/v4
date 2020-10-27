import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <p>&copy; {new Date().getFullYear()} 
        <span> <a href="" alt="dimas abimanyu github">Dimas Abimanyu</a></span> all right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
