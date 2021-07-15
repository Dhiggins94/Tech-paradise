import { useState } from "react"
import { useHistory } from 'react'
import axios from "axios"

const REVIEW_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/reviews`

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }

export default function AddForm() {
  const [name, setName] = useState("")
  const [review, setReview] = useState("")
  const [rating, setRating] = useState("")

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      review,
      rating,
    };
    const response = await axios.post(REVIEW_BASE_URL, {fields}, { headers })
    console.log(response)
    setName("")
    history.push(`/inventory/${response.data.id}`)

  }
  return (
    <div>
      new form
      <form>
        <label> Your Name</label>
        <input type="text"
          value={name}  onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Your Review</label>
        <input type="text" 
          value={review} onChange={(e) => setReview(e.target.value)} />
        <br />
        <label>Leave a Rating</label>
        <input type="number"
          value={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
        <br />
        <button>add new review</button>
      </form>
    </div>
  )
}
