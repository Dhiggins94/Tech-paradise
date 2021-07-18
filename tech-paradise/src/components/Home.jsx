import React from 'react'
import "./Home.css"
// import axios from "axios"
// import { useState,useEffect } from 'react'
// import { PRODUCT_BASE_URL, headers } from '../services'
// import { useParams } from 'react-router'


export default function Home() {
  // const [category, setCategory] = useState("")
  
  // const { id } = useParams
  
  // table 1 get request
 
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   useEffect(() => {
  //     const fetchCategories = async () => {
  //       const categoryUrl = `${PRODUCT_BASE_URL}`
  //       const response = await axios.get(categoryUrl, { headers })
  //       const filterCategories = response.data.records.filter(category => (
  //         category.fields.category === id
  //       ))
  //       setCategory(filterCategories)
  //       console.log(response.data)
  //     }
  //     fetchCategories()
  //   },[id])

  //       }

  return (
    <div className="home">
      <p> Welcome to tech-paradise, this site is used to explore and submit reviews of electonics that are on the market</p>
      <p> press the button at the top to see our selection  </p>
      <input />
      <button > Search </button>
    </div>
  )
}
