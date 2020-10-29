import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {

  return (
    <section className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <Links styleClass="sidebar-links" />
      {/* <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} /> */}
    </section>
  )
}

export default Sidebar
