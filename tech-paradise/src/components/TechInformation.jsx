import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useHistory } from "react-router";
import {ReactStars} from "react-rating-stars-component";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const PRODUCT_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/products`
const REVIEW_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/reviews`
const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }

const forms = {
  name: "",
  review: ""
}
export default function TechInformation() {
  const [device, setDevice] = useState({})
  const { id } = useParams()
  const [input, setInput] = useState(forms)
  const history = useHistory()

// handles table 1 axios call
  useEffect(() => {
  const fetchDevice = async () => {
  const deviceURL = `${PRODUCT_BASE_URL}/${id}`
  const res = await axios.get(deviceURL, { headers })
  setDevice(res.data)
  }
  fetchDevice()
  }, [id])

// the handlechange and submit function
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
// POST for the 2nd table
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post(REVIEW_BASE_URL, { fields: input }, { headers });
    console.log(res);
    history.push(`/product/${id}`)
  };
    
  return (
    <div>
      {/* throws data on page */}
      <h3> {device.fields?.name}  </h3>
      <img src={device.fields?.image} alt="item" />
      <p>{device.fields?.productDescription}</p>
      <p>{device.fields?.price}</p>
      
        {/* shows the form and star rating */}
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
        <input name="review"
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