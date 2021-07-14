import React from 'react'
import PulseLoader from "react-spinners/PulseLoader";
import { useState, useEffect } from 'react'
import axios from 'axios';


const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
 const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
 const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/products`
//  const SECOND_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/reviews`
 const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` };


export default function InventoryCatergory() {
  const [inventory, setInventory] = useState([])  

useEffect(() => {
  const getInventory = async () => {

    const res = await axios.get(BASE_URL, {headers,})
    setInventory(res.data.records)
  };
getInventory()
}, [])

  if (inventory.length === 0) {
  return <PulseLoader />
}



  return (
    <div>
      Inventory
    </div>
  )
}
