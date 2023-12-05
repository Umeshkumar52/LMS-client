import React from 'react'
import { useLocation } from 'react-router-dom'
export default function CheckoutSuccess() {
  const {state}=useLocation()
  console.log("paymentDetail",state);
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Checkout SuceessFull</h1>
    </div>
  )
}
