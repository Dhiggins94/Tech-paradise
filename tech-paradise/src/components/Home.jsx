import React from 'react'
import "./Home.css"
import axios from "axios"
import { useState,useEffect } from 'react'
import { PRODUCT_BASE_URL, headers } from '../services'


export default function Home() {
  // const [filterDesktops, setFilterDesktops] = useState("")
  // const [filterLaptops, setFilterLaptops] = useState("")
  // const [filterKeyboards, setFilterKeyboards] = useState("")
  // const [filterMouse, setFilterMouse] = useState("")
  // const [filterMonitors, setFilterMonitors] = useState("")

  const [category, setCategory] = useState("")

// first table 1 get request
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(PRODUCT_BASE_URL, { headers })
      let filterKeyboards = response.data.records.filter((category) => category.hasKeyboard === true)
      let filterDesktops = response.data.records.filter((category) => category.hasDesktop === true)
      let filterMouses = response.data.records.filter((category) => category.hasMouse === true)
      let filterLaptops = response.data.records.filter((category) => category.hasLaptop === true)
      let filterMonitors = response.data.records.filter((category) => category.hasMonitor === true)

      console.log(filterMonitors)
      console.log(filterLaptops)
      console.log(filterMouses)
      console.log(filterKeyboards)
      console.log(filterDesktops)
      console.log(response.data)
      setCategory(response.data)
    }
    fetchCategories()
},[])


  
  return (
    <div className="home" > 
      <p> Welcome to tech-paradise, this site is used to explore and submit reviews of electonics that are on the market</p>
      <p> press the button at the top to see our selection  </p>
      <button>   {category.fields?.category.hasDesktop }desktops </button>
      <button>  {category.fields?.category.hasLaptop}laptops </button>
      <button> {category.fields?.category.hasKeyboard }keyboards </button>
      <button> {category.fields?.category.hasMouse } mouses </button>
      <button>  {category.fields?.category.hasMonitor }monitors </button>
    </div>
  )
}
