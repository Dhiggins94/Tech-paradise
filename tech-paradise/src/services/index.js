 const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
 const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
export const PRODUCT_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/products`
export const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }
export const REVIEW_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/reviews`
