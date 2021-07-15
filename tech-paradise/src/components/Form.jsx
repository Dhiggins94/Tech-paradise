import React from 'react'
import axios from "axios";
import { useState } from "react"
import { useHistory } from "react-router";
import {ReactStars} from "react-rating-stars-component";


const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const REVIEW_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/reviews`
// const PRODUCT_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/products`
const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }

const fields = {
  name: "",
  review: "",
  rating: "" ,
}
export default function Form(fields) {
  // this is everything inside table 2
  const [input, setInput] = useState(fields)
  const history = useHistory()

  const handleChange = (event) => {
  
    const {name, value} = event.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }


   const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post(REVIEW_BASE_URL,
      { fields: input}, { headers })
    console.log(res)
    setReview("")
    history.push(`/inventory/`)

  }

  return (
    <div>
      <h2> post your reviews</h2>
      <form onSubmit={handleSubmit}>
        <label>your name</label>
        <input name="name"
          value={input.name}
          onChange={handleChange}
        placeholder="Your name goes here"
          />
          <br />
        <label> review section</label>
        <input type="text" value={review}
          onChange={handleChange} />
        <br />
        <label>Rating</label>
        <ReactStars count={5}
          onChange={handleChange}
          size={24}
          color2={'#ffd700'}
        />
        <br />
        <Button> Submit Review</Button>
      </form>
    </div>
  )
}


