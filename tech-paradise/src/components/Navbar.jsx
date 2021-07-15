import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/"><h2> Home</h2></Link>
        <h1>Tech-Paradise</h1>
        <Link to="/inventory">List of all electronics </Link >
        <Link to="/add-form">post a review of our products </Link >
      </nav>
    </div>
  )
}
