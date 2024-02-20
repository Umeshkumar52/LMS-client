import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userEnrollCourses } from '../Reducer/Slices/CourseSliceReducer'
import UserEnrollCoursesCard from './UserEnrollCoursesCard'
import { useNavigate } from 'react-router-dom'
export default function MyCourses() {
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const [data,setData]=useState([])
    const state=useSelector((state)=>{ return state.auth.user.enrollCourses})
   useEffect(()=>{
    (async()=>{ 
        const response=await dispatch(userEnrollCourses(state))
        setData(response.payload.message)
       })();
   },[])
  return (
    <div className='flex flex-col gap-6 m-4'>
    <div className=''>
      <h1 className='text-2xl font-bold text-white'>Enrolled Courses</h1>
      <hr className='bg-red-600 w-[14rem] h-1'/>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 md:grid-cols-2'>  
    {
      data.map((Element)=>(
         <UserEnrollCoursesCard key={Element._id} data={Element}/>
      ))
    }
    </div>
    </div>
  )
}
