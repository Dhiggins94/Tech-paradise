import React from 'react'

export default function TechInfo(props) {

  return (
    <div>
      <h3>{props.product.fields.name}</h3>
     <img src={props.product.image} alt="pictures" />
    </div>
  )
}