import React from "react"
import { Link, useNavigate } from "react-router-dom"
export default function Navbar() {
  // Using useNavigate to programmatically navigate to another route
  const navigate = useNavigate()

  // usage of navigate rather use of to in Link
  // Allows you to navigate based on certain conditions.
  // const isAuthenticated = true
  // const handleLogin = () => {
  //   if (isAuthenticated) {
  //     navigate("/dashboard")
  //   } else {
  //     navigate("/login")
  //   }
  // }

  return (
    <div className="navbar">
      <div className="logo">Varathan</div>
      <div className="navlist">
        <Link to="/" className="nav-link">
          {/* Link to=""  or NavLink to=""*/}
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

        <Link className="nav-button" onClick={() => navigate("/")}>
          Login
        </Link>
      </div>
    </div>
  )
}
