import React, { useState } from 'react'
import  {useDispatch, useSelector}  from 'react-redux'
import { useEffect } from 'react'
import axiosInstance from '../Helpers/AxiosInstance'
import { allCourses, courseByName } from '../Reducer/Slices/CourseSliceReducer'
import { error } from 'autoprefixer/lib/utils'
import CourseCard from '../components/CourseCard'
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpiner from '../components/LoadingSpiner'
import SearchBar from '../components/SearchBar'
import FindCourseByName from './FindCourseByName'
export default function ExploreCourses() {
  const dispatch=useDispatch()
  const [isLoading,setIsLoading]=useState(false)
    const {courseList}=useSelector((state)=>state.course)
    const [searchTerm,setSearchTerm]=useState('')
    function searchdata(data){
      setSearchTerm(data)
    }
  return (
    <div className=' flex flex-col px-3 gap-2'>
      <div className='w-full px-2 pt-8 '>
         <SearchBar updateSearchTerm={searchdata}/> 
      </div>
      <div className='ml-6 mt-6'>
      <h1 className='text-2xl font-bold text-slate-200'>Our Courses</h1>
      <hr className='bg-red-600 w-[10rem] h-1'/>
          </div>
    {(searchTerm.length==0)?
     <div className='flex flex-col gap-4'>
      
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 md:grid-cols-2'>
      {(!isLoading)?
      courseList.map((Element)=>{
       return <CourseCard key={Element._id} data={Element}/>
       })
       :<LoadingSpiner/>
      }
       {/* <ToastContainer/> */}
       </div>
       </div>
       :<FindCourseByName key={searchTerm} data={searchTerm}/>
}
    </div>
  )
}
