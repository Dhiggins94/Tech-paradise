import React from 'react'
import { Link } from "react-router-dom"
import Home from './Home'
export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/"><h2>
        <Home />
          <p> Home</p>
         </h2>
        </Link>
        <h1>Tech-Paradise</h1>
        <Link to="/inventory">List of all electronics </Link >
        {/* <Link to="/add-form">post a review  </Link > */}
      </nav>
    </div>
  )
}
