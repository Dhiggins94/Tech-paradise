import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
// import{AIRTABLE_KEY,PRODUCT_BASE_URL, headers} from "..services/"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const PRODUCT_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/products`
const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }


export default function TechInformation() {
  const [device, setDevice] = useState({})
  const { id } = useParams()

  useEffect(() => {


  const fetchDevice = async () => {
  const deviceURL = `${PRODUCT_BASE_URL}/${id}`
  const res = await axios.get(deviceURL, { headers })
  setDevice(res.data)
  }

  fetchDevice()
  }, [])


  // const handleDelete = async () => {
  //     const deviceURL = `${PRODUCT_BASE_URL}/${id}`
  //     const res = await axios.delete(deviceURL, { headers })
  //     setDevice(res.data)
  //     }
    



  return (
    <div>
      <h3> {device.fields?.name}  </h3>
      <img src={device.fields?.image} alt="picture-of-item" />
      <p>{device.fields?.productDescription}</p>
      <p>{device.fields?.price}</p>
      <form>

      </form>

    </div>
  )
}
// i can add stuff from table one here
// we should be able to edit reviews and delete reviews here
// form for review should also exist here
{/* <button onClick={handleDelete}>Delete Review</button> */}
