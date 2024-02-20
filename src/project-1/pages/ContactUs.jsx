import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
import { query } from '../Reducer/Slices/authSliceReducer';
export default function ContactUs() {
  const dispatch=useDispatch()
  const [queryData,setQueryData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    message:""
  })
  function messageHandler(event){
   const {name,value}=event.target
    setQueryData({
      ...queryData,
      [name]:value
    })
  }
  async function querySent(event){
    event.preventDefault();
     const response=await dispatch(query(queryData))
     console.log(response.payload.success);
     if(response.payload.success==true){
      setQueryData({
        firstName:"",
        lastName:"",
        email:"",
        message:""
      })
     }
  }
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className=' xl:text-3xl my-6 flex flex-col items-center justify-center'>
    <div>
     <h1 className='text-3xl text-slate-400 font-serif xl:text-6xl'>Get in touch</h1>
     <p className='flex flex-col text-slate-200 w-[60vh] lg:w-[60vh] font-normal xl:text-2xl'>
      How can we help you,Kindly submit your query here our team response your query as soon as possible.
     </p>
     </div>
     <form onSubmit={querySent} className='flex flex-col justify-center gap-6'>
     <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
      <div>
       <label className='block'>First Name</label>
       <input type='text' placeholder='First Name' required value={queryData.firstName} name='firstName' onChange={messageHandler} className='border-2 px-4 py-1 text-white font-normal'/>
     </div>
      <div>
       <label className='block'>Last Name</label>
       <input type='text' placeholder='Last Name' value={queryData.lastName} name='lastName' onChange={messageHandler} className='border-2 px-4 py-1 text-white font-normal'/>
      </div>
       </div>
      <div>
       <label className='block'>Email</label>
       <input type='text' placeholder='Email' required value={queryData.email} name='email' onChange={messageHandler} className='border-2 px-4 py-1 text-white font-normal'/>
       </div> 
     <div>
       <label className='block'>Message</label>
       <textarea type='text' placeholder='message...' required value={queryData.message} name='message' onChange={messageHandler} className='border-2 px-4 py-1 text-white font-normal'/>
   </div>
    </div>
    <div>
      <label className='block'>
       <button type='submit' className='border-2 px-4 py-1 text-white font-normal'>Submit</button>
       </label>
    </div>
     </form>
     </div>
     <ToastContainer/>
   </div>
  )
}
