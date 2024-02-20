import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ResetPasswordUrl } from '../Reducer/Slices/authSliceReducer'
import {ToastClassName,ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
export default function ResetPasswordUrlHnadle() {
  const navigate=useNavigate()
  const urlToken=new URLSearchParams(window.location.search)
  const urlResetToken=urlToken.get('resetToken')
  const dispatch=useDispatch()
  const [inputData,sertInputData]=useState({
    newPassword:"",
    confirmPassword:""
  })
  const resetPasswordValue=[urlResetToken,inputData]
  async function resetPasswordHandler(){
    const response=await dispatch(ResetPasswordUrl(resetPasswordValue))
    if(!response){
      toast.error(" SORRY! Unable to reset Password, please Try again")
    }
    toast.success("Password Reset Successfully")
  }
  function inputHandller(event){
    event.preventDefault()
    const{name,value}=event.target
    sertInputData({
      ...inputData,
      [name]:value
    })

  }
  return (
    <div className='bg-[#a1a1a1ef] h-screen w-full bg-slate-500 flex flex-col justify-center items-center'>
   <div className='bg-[#e6e5e5ef] p-4 border-2 rounded-lg w-1/2 flex flex-col items-center  gap-3 justify-center'>
   <h1 className='text-3xl bg-clip-text font-extrabold text-transparent bg-gradient-to-l from-yellow-400 to-indigo-500'>
        Reset Password 
    </h1>
   <div className='w-1/2 flex flex-col justify-center items-center font-semibold text-black'>
    <p className='flex flex-col items-center justify-center'>
      Enter your password to reset. 
      Enter regioster email to reset password
       which is send to yyour register email
    </p>
    </div>
    <input type='text' name='newPassword'  onChange={inputHandller} placeholder='New Password' className=' w-1/2 font-bold p-3 rounded-lg '/>
    <input type='text' name='confirmPassword' onChange={inputHandller} placeholder='Confirm Password' className=' w-1/2 font-bold p-3 rounded-lg '/>
    <button onClick={resetPasswordHandler} className='w-1/2 bg-blue-500 hover:bg-blue-700 p-3 font-extrabold text-yellow-500 rounded-lg'>Submit</button>
    </div>
    <ToastContainer/>
    </div>
  )
}
