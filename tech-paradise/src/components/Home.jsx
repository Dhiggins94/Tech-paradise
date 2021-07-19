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
  let filter = []
  const [toggle, setToggle] = useState(false)
  const [filterItems, setFilterItems] = useState(undefined)
// first table 1 get request
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(PRODUCT_BASE_URL, { headers })

      // let filterKeyboards = response.data.records.filter((category) => category.hasKeyboard === true)
      // let filterDesktops = response.data.records.filter((category) => category.hasDesktop === true)
      // let filterMouses = response.data.records.filter((category) => category.hasMouse === true)
      // let filterLaptops = response.data.records.filter((category) => category.hasLaptop === true)
      // let filterMonitors = response.data.records.filter((category) => category.hasMonitor === true)
      // console.log(filterMonitors)
      // console.log(filterLaptops)
      // console.log(filterMouses)
      // console.log(filterKeyboards)
      // console.log(filterDesktops)
      console.log(response.data)
      setCategory(response.data.records)
    }
    fetchCategories()
},[])
  function filt(name, e) {
    e.preventDefault()
    console.log(category[0].fields.category)
    filter = category.filter((category) => category.fields.category === name)
    console.log(filter)
    setFilterItems(filter)
    setToggle((curr) =>!curr)
         }
      
         useEffect(() => {
           console.log(filter)
            // eslint-disable-next-line 
         },[toggle])
  
  
  return (
    <div className="home" > 
      <p> Welcome to tech-paradise, this site is used to explore and submit reviews of electonics that are on the market</p>
      <p> press the button at the top to see our selection  </p>
      <button onClick= {(e)=>filt("desktop",e)}>   desktops </button>
      <button onClick= {(e)=>filt("laptop",e)} >  laptops </button>
      <button onClick= {(e)=>filt("keyboard",e)} > keyboards </button>
      <button onClick= {(e)=>filt("mouse",e)}>  mouses </button>
      <button onClick={(e)=> filt("monitor", e)}>  monitors </button>
      <div className="productPlacement">
        {filterItems? 
          filterItems.map((product) => (
            <div key={product.id}>
              <img  className="ProductImage" src={product.fields.image} alt="nice pictures"/>
            <p> {product.fields.name}</p>
            </div>
        )):null}
      </div>


    </div>
  )
}
