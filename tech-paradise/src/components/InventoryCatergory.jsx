// imports go here
import React from 'react'
import PulseLoader from "react-spinners/PulseLoader";
import { useState, useEffect } from 'react'
import axios from 'axios';

// airtable, urls, and others go here
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const PRODUCT_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/products`
// const REVIEW_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/reviews`
 const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }

export default function InventoryCatergory() {
  const [inventory, setInventory] = useState([])  
// my product render
  useEffect(() => {
    const getInventory = async () => {
      const res = await axios.get(PRODUCT_BASE_URL, {headers});
      setInventory(res.data.records);
    };
    getInventory()
  }, []);
  // conditional loading
if (inventory.length === 0) {
  return <PulseLoader />
}





  return (
    <>
      {inventory.map(product => {
       return <div>{product.fields.name}</div>
      })}
    </>
  )
}
