import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { forgetPassword } from '../Reducer/Slices/authSliceReducer'
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ForgetPassword() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [resetDetail,setResetDetail]=useState({
   Email:""
  })
  function resetDetailHandller(event){
    event.preventDefault()
    const {name,value}=event.target
    setResetDetail({
      ...resetDetail,
      [name]:value
    })
  }
  console.log("reset",resetDetail);
    async function resetPassword(){
        const response=await dispatch(forgetPassword(resetDetail))
        resetDetail.Email=""
        toast.success("Reset password link send your E-mail")
      // navigate('/PasswordResetSuccess',{state:{...response.payload}})
    }
  return (
    <div className='bg-[#787878ef] h-screen w-full flex justify-center items-center'>
      <div className='bg-[#e6e6e6ef]  rounded-xl w-[30rem] px-10 py-5 border-2 flex flex-col justify-center items-center gap-4'>
    <h1 className=' text-2xl font-extrabold text-black'>Reset Password</h1>
     <div className='w-full'>
        <p className='text-xl font-bold text-black gap-4'>
         For reset password enter your register email,
         Reset password link sent to that email address
        </p>
      </div>
       <input type='text' name='Email' onChange={resetDetailHandller} placeholder='Enter your Email ' className='w-full rounded-lg border-2 p-2 font-bold'/>
       <button onClick={resetPassword} className='w-full bg-indigo-700 hover:bg-indigo-900 ring-1 ring-slate-100 rounded-lg p-2 text-xl font-extrabold text-white'>Reset Password</button>
      </div>
      <ToastContainer/>
    </div>
  )
}
