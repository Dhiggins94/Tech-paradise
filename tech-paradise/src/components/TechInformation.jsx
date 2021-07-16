import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import AddForm from './AddForm'
// import { useHistory } from "react-router";
// import StarRating from 'react-star-rating'

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
const PRODUCT_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/products`
const REVIEW_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/reviews`
const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }

export default function TechInformation() {
  const [device, setDevice] = useState({})
  const [allReviews, setAllReviews] = useState([])
  const [toggle, setToggle] = useState(false)
  
  // for the form
  const { id } = useParams()
  

// handles table 1 axios  get call
  useEffect(() => {
    const fetchDevice = async () => {
      const deviceURL = `${PRODUCT_BASE_URL}/${id}`
      const res = await axios.get(deviceURL, { headers })
      setDevice(res.data)
    }
    // handles table 2 axios get call
    if (id) {
      fetchDevice()
    }
  }, [id])
  // table 2
  useEffect(() => {
    const fetchAllReviews = async () => {
      const reviewTable = `${REVIEW_BASE_URL}`
      const response = await axios.get(reviewTable, { headers })
      // setRatings(response.data)
      const filteredReviews = response.data.records.filter(review => (
        review.fields.products[0] === id
      ))
      setAllReviews(filteredReviews)
    }
    if (Object.keys(device).length !== 0 && device.constructor === Object) {
      fetchAllReviews()
    }
}, [device,toggle])


  // useEffect(() => {
  //   if (allReviews.length > 0 ) {
  //     const fetchProductReviews = (id,allReviews) => {
  //       const productReviews = allReviews.filter(review => (
  //         review.fields.products[0] === id
  //       ))
  //       setProductReviews(productReviews)
  //     }
  //     console.log(allReviews)
  //       fetchProductReviews(id)
  //       // const productReviews = allReviews.filter(review => (
  //       //   review.fields.products[0] === id
  //       //  ))
  //     }
  // }, [allReviews])
  
  const reviewsJSX = allReviews.map((review) => {
   return  <p> {review.fields.name} </p>
  })
  console.log(reviewsJSX)
  





  // handle submit for form

    
  return (
    <div>
      {/* throws data on page */}
      <h3> {device.fields?.name}  </h3>
      <img src={device.fields?.image} alt="item" />
      <p>{device.fields?.productDescription}</p>
      <p>{device.fields?.price}</p>
      <AddForm productId={id} setToggle={setToggle} />
      {/* maps through the 2nd table */}
      {allReviews.map(review => (
        <p> rating {review.fields.rating} out of 5 review: {review.fields.review} </p>

      ))}

    </div>
  )
}