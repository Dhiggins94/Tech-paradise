import React from 'react';
import { Link } from "react-router-dom"

export default function Tech({ product }) {
  const{id,fields} = product
  return (
    
    <Link to={`/product/${id}`} >
    <>
        <h3>{fields.name}</h3>
       <img src={fields.image} alt="pictures" />
      </>
    </Link>
    
  )
 }
// <img src={fields.image} alt="pictures" />
// <h4>{fields.brand} </h4>
// <p> {fields.productDescription} </p>

// we are getting data from table one to display to the DOM
// the next step going forward is to continue going through displaying things fromt the first table when item is clicked
// this will lead to implementing the 2nd table for its reviews via FORM and possible star or number rating
// overrall we need to get the BUTTONS and take those buttons to route them to those particular items via filter thats when i know im hitting mvp properly