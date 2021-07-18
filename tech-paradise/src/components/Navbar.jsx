import React from 'react'
import { Link } from "react-router-dom"

import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="nav" >
      <nav>
        <Link to="/"><h2>
          <p> Home</p>
         </h2>
        </Link>
        <h1>Tech-Paradise</h1>
        <Link to="/inventory">
          <button> List of all electronics </button></Link >
      </nav>
    </div>
  )
}
