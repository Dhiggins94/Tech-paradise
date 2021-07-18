import React from 'react';
import { Link } from "react-router-dom"
import "./tech.css"
export default function Tech({ product }) {
  const{id,fields} = product
  return (
    
    <Link to={`/product/${id}`} >
    <div className="tech">
        <h3>{fields.name}</h3>
       <img src={fields.image} alt="pictures" />
      </div>
    </Link>
    
  )
 }