import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LoadingSpiner from '../../components/LoadingSpiner'
import { razorpayKey,verifySubscription,Buysubscription } from '../../Reducer/Slices/paymentSliceReducer'
import {ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import useRazorpay from 'react-razorpay'
export default function Checkout(){
  const Razorpay=useRazorpay()
  const [ready,setReady]=useState(false)
  const [isLoading,setIsLoading]=useState(false)
const dispatch=useDispatch()
const navigate=useNavigate()
const state=useSelector((state)=>console.log("states",state))
const razorpay_key=useSelector(state=>{return state.payments.razorpayKey.message})
const subscription_id=useSelector((state)=>{return state.payments.subscription.subscription_id})
const user=useSelector((state)=>{return state.auth.user})
console.log("all details....",razorpay_key,subscription_id,user);
const isVerifySubscription=useSelector((state)=>{return state.isVerifySubscription})

  const paymentHandller=async function(event){
       event.preventDefault()
const paymentDetails={
  razorpay_payment_id:"",
  razorpay_subscription_id:"",
  razorpay_signature:""
}
    //   if(!subscription_id || !razorpay_key){
    //   return
    // }
       const options={
        "key":'rzp_test_nQWGOqxTtkbLzt',
        "subscription_id":subscription_id,
        "name":"software privet limited",
        "description":"monthly subscription",
        "handler":async(response)=>{
          console.log("response.handler",response);
       paymentDetails.razorpay_payment_id=response.razorpay_payment_id
       paymentDetails.razorpay_subscription_id=response.razorpay_subscription_id
       paymentDetails.razorpay_signature=response.razorpay_signature
       console.log("paymentDetail",paymentDetails);
       const paymentVerified=await dispatch(verifySubscription(paymentDetails));
       console.log("paymentVerified",paymentVerified);
       (paymentVerified)?navigate('/Checkout/success',{state:{...paymentVerified}}):navigate('/Checkout/fail',{state:{...paymentVerified}})
      },
       "prefill":{
        "name":user.FullName,
        "Email":user.Email
        },
       "theme":{
        "color":"#f65254"
       },
  }
  const paymentObject=new 
  window.Razorpay(options);
  paymentObject.open();
}
  useEffect(()=>{
   (async()=>{
    setIsLoading(true)
    await dispatch(razorpayKey()
    )
    await dispatch(Buysubscription(user._id))
    setIsLoading(false)
    // await dispatch(paymentHandller())
    // setIsLoading(false)
   })();
  },[])
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full '>
     {(!isLoading)?
    <div className='flex flex-col items-center justify-center gap-4 bg-slate-100 w-[40%] h-[60%] border-2 rounded-lg'>
    <div className='flex flex-col justify-center items-center '>
      <h1 className='text-4xl font-bold'>Payment With Razorpay</h1>
    </div>
     <div className='text-xl font-normal flex flex-col gap-4 '>
      <h1><span className='font-bold text-2xl'>Name:</span>{user.FullName}</h1>
      <p><span className='font-bold text-2xl'>Email:</span>{user.Email}</p>
    </div>
      <button onClick={paymentHandller} className=' bg-yellow-700 rounded-lg border-2 px-20 py-2 '>Buy Now</button>
    </div>
      :<LoadingSpiner/>
     }
    <ToastContainer/>
    </div>
  )
}