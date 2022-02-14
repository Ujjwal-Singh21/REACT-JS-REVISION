import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {

  const navigate = useNavigate()
  
  return (
    <div>
      <h1> --- Order Summary--- </h1>
      <ul type = "circle">
         <li>Beetroot</li>
         <li>Ginger</li>
         <li>Potato</li>
         <li>Radish</li>
      </ul>
      
      {/* <button onClick={() => navigate(-1)}> Back Home </button> */}
      <button onClick={() => navigate('/')}> Back Home </button> 
    </div>
  )
}














{
  /* <button onClick={() => navigate('/')}> Back Home </button> */
}
