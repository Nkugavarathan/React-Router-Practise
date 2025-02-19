import React from "react"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Products from "./pages/Products"
import RootLayout from "./layout/RootLayout"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* The 'index' prop specifies this as the default route when the parent route matches exactly. */}
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

{
  /*  Routes
             ↓
            Route
      
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes> */
}
