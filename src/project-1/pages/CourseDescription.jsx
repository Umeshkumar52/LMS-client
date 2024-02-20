import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { deletCourse } from '../Reducer/Slices/CourseSliceReducer';
import LoadingSpiner from '../components/LoadingSpiner'
import {ToastContainer,toast } from 'react-toastify';
import {checkEnrollCourseForUser} from '../Reducer/Slices/CourseSliceReducer'
import 'react-toastify/dist/ReactToastify.css';
import useRazorpay from 'react-razorpay';
export default function CourseDescription() {
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const {state}=useLocation();
    const id=state.id
    const userData=useSelector((state)=>{return state.auth})
    const data=state._id   
   async function delet(event){
         event.preventDefault()
         setIsLoading(true)
        const response=await dispatch(deletCourse(id))
        setIsLoading(false)
        if(!response.payload) return
        navigate('/ExploreCourses')
      }
    
  return (
    <div className='bg-[#2d2d31eb] h-dvh flex flex-col justify-center items-center'>
    <div className="card bg-base-100 shadow-xl my-10 p-3 ">
   <div className='flex flex-col gap-3'> 
  <figure><img src={state.thumnail.secure_url} alt="Shoes" /></figure>
  </div>
  <div className="card-body">
    <h2 className="card-title text-white font-serif">{state.tittle}</h2>
    <div className='text-sm'>
    <p>{state.createBy}</p>
    </div>
    <p className='lg:w-[90vh]'>{state.description}</p>
    <div className="card-actions justify-end">
      <button onClick={(userData.isLoggedIn)?()=>navigate('/checkout',{state:{id:data}}):()=>navigate('/SignUp')} className="btn btn-primary">Enroll Now</button>
    </div>
  </div>
</div>
    <ToastContainer/>
    </div>
  )
}
