import React from 'react'
import "./Home.css"
import axios from "axios"
import { useEffect } from 'react'
import { PRODUCT_BASE_URL, headers } from '../services'


export default function Home() {

  // const [filterInput, setFilterInput] = useState("")
  // const [ filterCategory, setFilterCategory] = useState("")
// first table 1 get request
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(PRODUCT_BASE_URL, { headers })
      console.log(response.data)

    }
    fetchCategories()
},[])



  return (
    <div className="home">
      <p> Welcome to tech-paradise, this site is used to explore and submit reviews of electonics that are on the market</p>
      <p> press the button at the top to see our selection  </p>
      <button > desktops </button>
      <button > laptops </button>
      <button > keyboards </button>
      <button > mouses </button>
      <button > monitors </button>
    </div>
  )
}
