import React from 'react'
import PulseLoader from "react-spinners/PulseLoader";
import { useState, useEffect } from 'react'
import axios from 'axios';
import Tech from './Tech'

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const PRODUCT_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/products`
 const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }

export default function ListItems() {
  const [inventory, setInventory] = useState([])  
// my product render
  useEffect(() => {
    const getInventory = async () => {
      const res = await axios.get(PRODUCT_BASE_URL, {headers});
      setInventory(res.data.records);
    };
    getInventory()
  }, []);
  // conditional loading of the loader npm. site of npm package: https://www.npmjs.com/package/react-spinners
if (inventory.length === 0) {
  return <PulseLoader />
}



  return (
    <div >
      {inventory.map((product) => {
        
        return (
          
          <Tech key={product.id} product={product} />
        )
      })}
    </div>
  )
}