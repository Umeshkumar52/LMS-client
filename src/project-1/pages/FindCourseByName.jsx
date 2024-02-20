import React, { useState } from 'react'
import { courseByName } from '../Reducer/Slices/CourseSliceReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function FindCourseByName({data}) {
  const navigate=useNavigate()
  const [courseData,setCourse]=useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
       course(data)
       },[])
       async function course(data){
         const response= await dispatch(courseByName(data))
         if(response.payload){
       response.payload.map((Element)=>{setCourse(Element)})
         }
       }
  return (
    <div className='flex flex-wrap mt-4'>
      {(courseData.length!=0)?
         <div className='w-[80vh] bg-[#1a1d1af5] border-2 border-[#1a1d1af5] mx-3 rounded-lg font-semibold flex flex-col gap-2 pb-4 '>
         <div className=' flex flex-col gap-1'>
          <div>
           <img src={courseData.thumnail.secure_url} className='rounded-lg w-[26rem]' />
          </div>
          <div className='flex flex-col gap-1 pl-4 pr-4'>
          <h1 className='text-lg text-white font-bold'>{courseData.tittle}</h1>
          {/* duration */}
          <p className='font-normal text-base'>Become job ready in 25 weaks</p>
          <hr className='flex-grow border-t-2 border-t-slate-300 pl-2 pr-2'/>
          </div>
          </div>
         <div className='flex flex-col pl-4 font-normal text-xl'>
           <ul className='flex flex-col gap-1 text-base'>
             <li><span>✔️</span><span className='font-bold'>Opportunities:<span>{courseData.description.slice(0,20)}</span></span> </li>
             <li><span>✔️</span>100% live learning with experts instructors</li>
             <li><span>✔️</span>Pay After Placement</li>
           </ul>
         </div>
         <div className='flex flex-col justify-center p-4'>
          <button  onClick={()=>navigate('/ExploreCourses/description',{state:{...courseData}})} className='font-normal text-xl bg-red-500 text-white p-3 rounded-lg'>View Details</button>
         </div>
           </div>:""
      }
    </div>
  )
}
