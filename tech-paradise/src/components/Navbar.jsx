import React from 'react'
import { Link } from "react-router-dom"




export default function Navbar() {
  return (
    <div>
      <Link to="/"><h1> Tech-Paradise</h1></Link>
      <Link to="/all-products">Inventory</Link>
      
    </div>
  )
}
