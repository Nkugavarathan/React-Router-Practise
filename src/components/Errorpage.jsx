import React from "react"
import { useRouteError } from "react-router-dom"

export default function Errorpage() {
  const error = useRouteError()
  return (
    <div className="container">
      <h3>An Error Occured</h3>
      <p>{error.message}</p>
    </div>
  )
}
