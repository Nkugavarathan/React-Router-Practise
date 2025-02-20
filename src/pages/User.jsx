import React from "react"
import { useLoaderData } from "react-router-dom"

export default function User() {
  const userdetail = useLoaderData()

  console.log("userdetail:", userdetail) // Check if this logs the correct data

  if (!userdetail) {
    return <div>Loading...</div>
  }

  if (!Array.isArray(userdetail)) {
    console.error("Invalid data format:", userdetail)
    return <div>Error: Invalid data format</div>
  }

  return (
    <div className="container">
      {userdetail.map((user) => (
        <div key={user.id} className="user">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export const userLoader = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!response.ok) throw new Error("Network response was not ok")
    const data = await response.json()
    console.log("Fetched data:", data)
    return data
  } catch (error) {
    console.error("Fetching users failed:", error)
    throw error
  }
}

// using useeffecthook and useState simply
/*
import React, { useState, useEffect } from 'react';

export default function Users() {
  // Step 1: Initialize state variables
  const [data, setData] = useState([]); // Stores fetched user data
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [error, setError] = useState(null); // Stores any error encountered

  // Step 2: Fetch data using useEffect
  useEffect(() => {
    // Fetch user data from an API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(fetchedData => {
        setData(fetchedData); // Update state with fetched data
        setLoading(false); // Set loading to false when data is ready
      })
      .catch(err => {
        setError(err); // Capture any errors
        setLoading(false); // Stop loading if there's an error
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  /**
   * 🚀 Advantages of using useEffect for data fetching:
   * 
   * ✅ Automatically runs when the component mounts (no manual function calls needed).
   * ✅ Keeps the component declarative and readable.
   * ✅ Handles side effects (fetching data) without blocking rendering.
   * ✅ Prevents infinite loops by running only when dependencies change (empty array ensures one-time execution).
   * ✅ Simplifies cleanup if needed (e.g., aborting fetch requests).
   */

// Step 3: Conditional rendering
//   if (loading) {
//     return <div>Loading...</div>; // Show loading message while data is being fetched
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>; // Show error message if fetching fails
//   }

//   return (
//     <div>
//       <h2>List of Users</h2>
//       {data.map(user => (
//         <div key={user.id}>
//           <h3>{user.name}</h3>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// */
