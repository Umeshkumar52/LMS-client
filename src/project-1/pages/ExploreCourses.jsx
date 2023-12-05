import React, { useState } from 'react'
import  {useDispatch, useSelector}  from 'react-redux'
import { useEffect } from 'react'
import axiosInstance from '../Helpers/AxiosInstance'
import { allCourses } from '../Reducer/Slices/CourseSliceReducer'
import { error } from 'autoprefixer/lib/utils'
import CourseCard from '../components/CourseCard'
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpiner from '../components/LoadingSpiner'
export default function ExploreCourses() {
  const [isLoading,setIsLoading]=useState(false)
    const {courseList}=useSelector((state)=>state.course)
    const dispatch=useDispatch()
    async function exploreCourse(event){
         setIsLoading(true)
         await dispatch(allCourses())
         setIsLoading(false)
        }
   useEffect(()=>{
 exploreCourse()
   },[])
  return (
    <div className='flex flex-col gap-6' >
      <div className='flex justify-center items-center'>
       <h1 className='text-3xl font-extrabold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-indigo-600'>Explore Courses Created by professional mentors</h1>
      </div>
       <div className='grid grid-cols-3 gap-10'>
      {(!isLoading)?
      courseList.map((Element)=>{
       return <CourseCard key={Element._id} data={Element}/>
       }):<LoadingSpiner/>
      }
       <ToastContainer/>
       </div>
    </div>
  )
}
