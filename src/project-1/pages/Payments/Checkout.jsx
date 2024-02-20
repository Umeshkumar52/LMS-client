import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import LoadingSpiner from '../../components/LoadingSpiner'
import { enrollCourse } from '../../Reducer/Slices/CourseSliceReducer'
import { razorpayKey,verifySubscription,Buysubscription } from '../../Reducer/Slices/paymentSliceReducer'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import useRazorpay from 'react-razorpay'
export default function Checkout(){
  const {state}=useLocation()
  const Razorpay=useRazorpay()
  const [ready,setReady]=useState(false)
  const [isLoading,setIsLoading]=useState(false)
const dispatch=useDispatch()
const navigate=useNavigate()
const razorpay_key=useSelector(state=>{return state.payments.razorpayKey.message})
const subscription_id=useSelector((state)=>{return state.payments.subscription.subscription_id})
const user=useSelector((state)=>{return state.auth.user})
const isVerifySubscription=useSelector((state)=>{return state.isVerifySubscription})
  const paymentHandller=async function(event){
       event.preventDefault()
const paymentDetails={
  razorpay_payment_id:"",
  razorpay_subscription_id:"",
  razorpay_signature:""
}
       const options={
        "key":'rzp_test_nQWGOqxTtkbLzt',
        "subscription_id":subscription_id,
        "name":"software privet limited",
        "description":"monthly subscription",
        "handler":async(response)=>{
       paymentDetails.razorpay_payment_id=response.razorpay_payment_id
       paymentDetails.razorpay_subscription_id=response.razorpay_subscription_id
       paymentDetails.razorpay_signature=response.razorpay_signature
       const data=state.id
       console.log("idlog",data);
       const detail=[data,paymentDetails]
       const paymentVerified=await dispatch(verifySubscription(detail));
      navigate("/myCourses")
       const paymentDetail=paymentVerified
      //  console.log(user.subscription.id !==paymentVerified.meta.arg.razorpay_subscription_id);
      //   // if(user.subscription.id !==paymentVerified.meta.arg.razorpay_subscription_id){
      //     const data=[state.state._id,paymentDetail]
      //     console.log("call");
      //     const responsedata =await dispatch(enrollCourse(data))
        // }
        },
      "prefill":{
        "name":user.FullName,
        "Email":user.Email
        },
       "theme":{ 
        "color":"#f65254"
       },
  }
  try {
    const paymentObject=new 
    window.Razorpay(options);
    paymentObject.open();
  } catch (error) {
    toast.error("please check Internet connection",
    { position:toast.POSITION.TOP_CENTER,
    autoClose:2000})
  }
}
  useEffect(()=>{
   (async()=>{
    setIsLoading(true)
    await dispatch(razorpayKey())
    await dispatch(Buysubscription(user._id))
    setIsLoading(false)      
   })();
  },[])
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full '>
     {(!isLoading)?
    <div className='flex flex-col items-center justify-center gap-4 bg-green-300 p-4 border-2 rounded-lg'>
    <div className='flex flex-col justify-center items-center '>
      <h1 className='lg:text-4xl text-2xl text-black font-bold'>Payment With Razorpay</h1>
    </div>
     <div className='text-xl font-normal flex flex-col gap-4 '>
      <h1><span className='font-bold text-xl'>Name:</span>{user.FullName}</h1>
      <p><span className='font-bold text-xl'>Email:</span>{user.Email}</p>
    </div>
      <button onClick={paymentHandller} className=' bg-indigo-950 rounded-lg border-2 px-4 py-2 '>Buy Now</button>
    </div>
      :<LoadingSpiner/>
     }
    <ToastContainer/>
    </div>
  )
}