import React from 'react'
import axios from "axios";
import { useState } from "react"
import { useHistory } from "react-router";
import {ReactStars} from "react-rating-stars-component";


const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const REVIEW_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/reviews`
const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }


export default function Form() {
  // this is everything inside table 2
  const [review, setReview] = useState("")
  const [rating, setRating] = useState("")

  const history = useHistory()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const fields = {
      review, rating
    }
  }
  const res = await axios.post(REVIEW_BASE_URL, { fields }, {headers})
  setReview("")
  history.push(`/product/${res.data.id}`)
  

  return (
    <div>
      post your reviews
      <form onSubmit={handleSubmit}>
        <label>your name</label>
        <br />
        <input name="name"
          value={input.name}
          onChange={handleChange}
        placeholder="Your name goes here"
          />
          <br />
        <label> review section</label>
        <input type="text"
          value={input.review}
          onChange={handleChange}
          placeholder="Your reviews goes here"
          />
        <br />
        <label>Rating</label>
        <ReactStars count={5}
          value={input.rating}
          onChange={handleChange}
          size={24}
          color2={'#ffd700'}
        />
        <br />
        <button>submit review</button>
      </form>
    </div>
  )
}


