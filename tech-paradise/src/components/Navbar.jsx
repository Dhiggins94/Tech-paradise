import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <nav>
      <Link to="/"><h1> Tech-Paradise</h1></Link>
      <Link to="/inventory">List of all electronics </Link>
      </nav>
    </div>
  )
}
