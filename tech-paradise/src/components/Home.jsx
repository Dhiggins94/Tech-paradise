import React from 'react'
import "./Home.css"
import axios from "axios"
import { useState,useEffect } from 'react'
import { PRODUCT_BASE_URL, headers } from '../services'

export default function Home() {

  const [category, setCategory] = useState("")
  let filter = []
  const [toggle, setToggle] = useState(false)
  const [filterItems, setFilterItems] = useState(undefined)
// first table 1 get request
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(PRODUCT_BASE_URL, { headers })

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
      <p> Welcome to tech-paradise, this site is used to explore and submit reviews of electonics that are currently on the market</p>
      <p> press the button at the top to see our enitre selection  </p>
      <p> You can also press the buttons at the bottom to specify what your looking for</p>
      <button onClick= {(e)=>filt("desktop",e)}>   desktops </button>
      <button onClick= {(e)=>filt("laptop",e)} >  laptops </button>
      <button onClick= {(e)=>filt("keyboard",e)} > keyboards </button>
      <button onClick= {(e)=>filt("mouse",e)}>  mouses </button>
      <button onClick={(e) => filt("monitor", e)}>  monitors </button>
      
      <div >
        {filterItems? 
          filterItems.map((product) => (
            <div key={product.id}>
               <p> {product.fields.name}</p>
              <img className="display" src={product.fields.image} alt="nice pictures"/>
            </div>
        )):null}
      </div>


    </div>
  )
}
