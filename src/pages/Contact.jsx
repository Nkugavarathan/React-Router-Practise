import React from "react"
import { useNavigate } from "react-router-dom"

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div className="container">
      Contact
      <button onClick={() => navigate("info")}>Information</button>
      <button onClick={() => navigate("form")}>Form</button>
    </div>
  )
}
