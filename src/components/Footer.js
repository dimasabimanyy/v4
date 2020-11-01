import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <p>
          <a href="https://github.com/dimasabimanyy/v4" alt="dimas abimanyu github" target="_blank">
            Designed and Built by Dimas Abimanyu 
            🤙 &copy; {new Date().getFullYear()}
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
