import React from "react"
import { Outlet } from "react-router-dom"
export default function UserLayout() {
  return (
    <div className="container">
      <h1>List of Users</h1>
      <p>
        Lorem ipsum dolor sit amet. <strong>from userLayout</strong>
      </p>
      <br />
      <Outlet />
    </div>
  )
}
