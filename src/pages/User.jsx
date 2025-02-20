import React from "react"
import { useRouteLoaderData } from "react-router-dom"

export default function User() {
  const userdetail = useRouteLoaderData()

  if (!userdetail) {
    return <div>Loading...</div>
  }

  if (!Array.isArray(userdetail)) {
    return <div>Error: Invalid data format</div>
  }

  return (
    <div className="container">
      <h2>List of Users</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      {userdetail.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export const userLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  if (!response.ok) throw new Error("Network response was not ok")
  return response.json()
}
