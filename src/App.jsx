import React from "react"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"

import Home from "./pages/Home"

// import Contact from "./pages/Contact"
import ContactLayout from "./layout/ContactLayout"
import Form from "./components/Form"
import Info from "./components/Info"

import About from "./pages/About"

import Products from "./pages/Products"
import RootLayout from "./layout/RootLayout"

import UserLayout from "./layout/UserLayout"
import User, { userLoader } from "./pages/User"

import NotFound from "./pages/NotFound"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* The 'index' prop specifies this as the default route when the parent route matches exactly. */}
        {/* <Route path="contact" element={<Contact />} /> */}

        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<Info />} />
          <Route path="form" element={<Form />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />

        <Route path="user" element={<UserLayout />}>
          <Route index element={<User />} loader={userLoader} />
        </Route>

        <Route path="*" element={<NotFound />}></Route>
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
