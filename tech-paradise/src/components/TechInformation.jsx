import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const PRODUCT_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/products`
// const REVIEW_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/reviews`
const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }


export default function TechInformation() {
  const [device, setDevice] = useState({})
  const { id } = useParams()
// handles table 1 axios call
  useEffect(() => {
  const fetchDevice = async () => {
  const deviceURL = `${PRODUCT_BASE_URL}/${id}`
  const res = await axios.get(deviceURL, { headers })
  setDevice(res.data)
  }

  fetchDevice()
  }, [id])

  return (
    <div>
      {/* throws data on page */}
      <h3> {device.fields?.name}  </h3>
      <img src={device.fields?.image} alt="item" />
      <p>{device.fields?.productDescription}</p>
      <p>{device.fields?.price}</p>
     
    </div>
  )
}