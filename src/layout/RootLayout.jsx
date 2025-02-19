import React from "react"
import Navbar from "../pages/Navbar"
import { Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/*   The Outlet component in RootLayout will render the appropriate child
  component (Home, Contact, About, Products) based on the current route. */}
    </div>
  )
}
