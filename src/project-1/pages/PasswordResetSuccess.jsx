import React from 'react'
import { useLocation } from 'react-router-dom'
export default function PasswordResetSuccess() {
    const {state}=useLocation()
  return (
    <div className='text-3xl font-extrabold flex flex-col justify-center items-center w-full h-screen '>
      <div className='bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-red-700'>
       { state.message}
      </div>
    </div>
  )
}
