import React from 'react'
import {useSelector} from 'react-redux'
import { useNavigate,useLocation } from 'react-router-dom'
export default function CourseGreeting() {
const {state}=useLocation()

  return (
    <div className='flex justify-center bg-slate-800 items-center w-full h-screen'>
    <div className='w-[50%] h-[50%] flex justify-center items-center'>
    <h1 className=' text-green-500 font-extrabold text-4xl'>
     {state}
     </h1>
    </div>
    </div>
  )
}
