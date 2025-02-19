import React from "react"
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Varathan</div>
      <div className="navlist">
        <Link to="/" className="nav-link">
          {/* Link to="" */}
          Home
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>

        <Link to="/" className="nav-button">
          Login
        </Link>
      </div>
    </div>
  )
}
