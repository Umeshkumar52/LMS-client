import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { deletCourse } from '../Reducer/Slices/CourseSliceReducer';
import LoadingSpiner from '../components/LoadingSpiner'
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRazorpay from 'react-razorpay';
export default function CourseDescription() {
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const {state}=useLocation();
    const id=state.id
    const userData=useSelector((state)=>{return state.auth})
    console.log("status",userData,userData.user.subscription.status=="created");
   async function delet(event){
      event.preventDefault()
         setIsLoading(true)
        const response=await dispatch(deletCourse(id))
        setIsLoading(false)
        if(!response.payload) return
        navigate('/ExploreCourses')
      }
  return (
    <div className='bg-slate-800 w-full h-screen flex flex-col justify-center items-center'>
    {(!userData.isLoading)?
    <div className='flex flex-col bg-[#cbc9c9] rounded-lg py-4 text-[#3d3d3d] font-extrabold  text-xl justify-center items-center gap-3 w-[100vh]'>
   <div className=' w-fit h-fit px-10 py-5 flex flex-col gap-4'>
   {(!userData.isAdmin)?'':
    <div className='flex gap-4'>
    <button onClick={()=>navigate('/course/createLecture',{state:{...state}})} className='bg-indigo-700 w-[12rem] h-fit px-2 py-1 rounded flex justify-center items-center'>Add Lectures</button>
    <button onClick={delet} className='bg-blue-700  w-[10rem] h-fit px-2 py-1 rounded flex justify-center items-center'>deletCourse</button>
    <button onClick={()=>navigate('/update',{state:{...state}})}  className='bg-blue-700  w-[10rem] h-fit px-2 py-1 rounded flex justify-center items-center'>Edit</button>
    </div>}
     <div onClick={()=>{(userData.user.subscription.status=="Active")?navigate('/lectures',{state:{...state}}):navigate(1) } }>
    <h1><span className='text-2xl text-black font-extrabold itelic'>Languages:     </span>{state.tittle}</h1>
    <h2><span className='text-2xl text-black font-extrabold itelic'>Mentors:     </span>{state.createBy}</h2>
    <p><span className='text-2xl text-black font-extrabold itelic'>Description:     </span>{state.description}</p>
    <p><span className='text-2xl text-black font-extrabold itelic'>Lectures:     </span>{state.lectures.length}</p>
     </div>
    </div>
   {(userData.user.subscription.status=="created")?"":<button onClick={(userData.isLoggedIn)?()=>navigate('/checkout'):()=>navigate('/SignUp')} className='bg-indigo-900  text-white rounded flex justify-center items-center cursor-pointer py-1 px-4'>Pay with Razorpay</button> }
  </div>
    :<LoadingSpiner/>
    }
    <ToastContainer/>
    </div>
  )
}
