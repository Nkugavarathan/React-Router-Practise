import React from "react"
import Contact from "../pages/Contact"
import { Outlet } from "react-router-dom"
export default function () {
  return (
    <div>
      <Contact />
      <Outlet />
    </div>
  )
}
