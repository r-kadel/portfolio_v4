import React from "react"
// import logo from "../assets/logo.svg"
import { FaAlignRight, FaConnectdevelop } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({toggleSidebar}) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <span className="logo">
          <FaConnectdevelop />
          Kadel Web Services
        </span>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <span className="sr-only">Toggle Navigation</span>
          <FaAlignRight />
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar
