import React from 'react'
import { Carousel, useSelect } from '@material-tailwind/react'
import Home from '../pages/Home'
import HomeLayout from '../HomeLayout'
import CourseCard from './CourseCard'
import { allCourses } from '../Reducer/Slices/CourseSliceReducer'
import daisyui from 'daisyui'
import { useSelector,useDispatch } from 'react-redux'
import LoadingSpiner from './LoadingSpiner'
import { useEffect,useState } from 'react'
import SlideCourse from './SlideCourseCard'
export default function CoursesSlide() {
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
    <>
    <div className="carousel overflow-y-hidden flex w-[300px] px-6 lg:w-[650px] xl:w-[980px] 2xl:w-[1300px] gap-10 rounded">    
    {(!isLoading)?
      courseList.map((Element)=>{
       return  <SlideCourse key={Element._id} data={Element}/>
       }):<LoadingSpiner/>
      }
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
 </>
  )
}
