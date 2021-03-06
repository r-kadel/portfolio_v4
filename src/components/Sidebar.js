import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"

const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        <span className="sr-only">Close Navigation</span>
        <FaTimes />
      </button>
      {isOpen && (
        <div className="side-container">
          <Links styleClass="sidebar-links" />
          <SocialLinks styleClass="sidebar-icons" />
        </div>
      )}
    </aside>
  )
}

export default Sidebar
