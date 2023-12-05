import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LectursesCard from '../components/LectursesCard'
import { getLectures } from '../Reducer/Slices/CourseSliceReducer'
import { useLocation } from 'react-router-dom'
export default function LecturesData() {
    // const lecturesData=useSelector((state)=>{return state.course.lectures})
    const {state}=useLocation()
    const id=state._id;
    const lectureData=state.lectures
    // console.log("lectureData",lectureData.length);
    // const dispatch=useDispatch()
    // async function getLecturesData(){
    //     const response=await dispatch(getLectures(id))
    //     if(response.payload){
    //         console.log(response);
    //     }
    // }
    // useEffect(()=>{
    //   console.log("useEffect called");
    //   getLecturesData(id)
    // },[])
  return (
    <div className='flex flex-col gap-4 justify-around items-center absolute'>
      <div className=' w-full flex flex-col items-center justify-center'>
      <h1 className='sticky p-2 bg-clip-text text-transparent bg-gradient-to-l from-yellow-600 to-indigo-500 text-4xl font-extrabold'>Lecture data for learn in the video forms</h1>
      </div>
     <div className='flex flex-wrap gap-4 justify-around'>
     
     {
       lectureData.map((Element)=>{
        return <LectursesCard lecturesData={Element}/>
       })
      }

     </div>
    </div>
  )
}
