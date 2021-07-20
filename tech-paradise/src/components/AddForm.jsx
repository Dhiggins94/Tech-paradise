import React, { useState } from 'react'
import axios from "axios"
import { REVIEW_BASE_URL, headers } from "../services"
import "./form.css"
export default function AddForm(props) {
  const [name, setName] = useState("")
  const [review, setReview] = useState("")
  const [rating, setRating] = useState(0)
 
  // handle submit data from form
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const fields = {
      name,
      review,
      rating,
      products: [props.productId]
    }
    console.log(fields)
//post request 
    const response = await axios.post(REVIEW_BASE_URL, { fields }, { headers })
    props.setToggle(prevState => !prevState)
    console.log(response)
}

  
  
  // form 
  return (
    <div className="form">
      <h3>post a new review</h3>
      <form  className="field" onSubmit={handleSubmit}>
        <label> name</label>
        <input  name="name" value={name} onChange={(e) =>{setName(e.target.value)}} placeholder="put your name"/>
        <br />
        <label>review</label>
        <textarea name="review" value={review} onChange={(e) =>{setReview(e.target.value)}} placeholder=" write your review"/>
        <br />
        <label> rating</label>
        <input  name="rating" type="number" value={rating} onChange={ (e) =>{setRating(e.target.valueAsNumber)}}placeholder="give a rating from 1-5"/>
        <br />
<button >Submit Review</button>
      </form>
    </div>
  )
}



























































// import { useState } from "react"
// import { useHistory } from 'react'
// import axios from "axios"


// const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
// const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
// const REVIEW_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/reviews`
// const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }

// export default function AddForm() {
//   const [name, setName] = useState("")
//   const [review, setReview] = useState("")
//   const [rating, setRating] = useState("")

//   const history = useHistory()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fields = {
//       name,
//       review,
//       rating,
//     };
//     const response = await axios.post(REVIEW_BASE_URL, {fields}, { headers })
//     console.log(response)
//     setName("")
//     history.push(`/inventory/${response.data.id}`)

//   }
//   return (
//     <div>
//       new form
//       <form onSubmit={handleSubmit}>
//         <label> Your Name</label>
//         <input type="text"
//           value={name}  onChange={(e) => setName(e.target.value)} />
//         <br />
//         <label>Your Review</label>
//         <input type="text" 
//           value={review} onChange={(e) => setReview(e.target.value)} />
//         <br />
//         <label>Leave a Rating</label>
//         <input type="number"
//           value={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
//         <br />
//         <button>add new review</button>
//       </form>
//     </div>
//   )
// }

