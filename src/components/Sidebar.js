import React from "react"
import Links from "../constants/links"
const Sidebar = ({ isOpen, toggleSidebar }) => {

  return (
    <section className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <Links styleClass="sidebar-links" />
    </section>
  )
}

export default Sidebar
