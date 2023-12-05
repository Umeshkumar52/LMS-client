import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function CourseCard({data}) {
  const secure_url=data.thumnail.secure_url
  console.log("course card Data",secure_url);
 const navigate=useNavigate()
 const dispatch=useDispatch()
 async function deletCourse(event){
    const response=await dispatch(deletCourse("652c780e7f3d1dad3cb73a55"))
    console.log(response);
    if(!response) return
    navigate('/ExploreCourses')
  }
  return (
    <div className='flex flex-wrap justify-center items-center'>
     <div className='rounded-lg tracking font-semibold flex flex-col pb-4'>
      <div className='bg-slate-50 shadow-inner border-2 border-slate-50 rounded-lg tracking font-semibold flex flex-col gap-2 pb-4 '>
      <div className=' flex flex-col gap-3'>
       <div>
        <img src={secure_url} className='rounded-lg w-[29rem]' />
       </div>
       <div className='flex flex-col gap-3 pl-4 pr-4'>
       <h1 className='text-3xl font-bold'>{data.tittle}</h1>
       {/* duration */}
       <p className='font-normal text-xl'>Become job ready in 25 weaks</p>
       <hr className='flex-grow border-t-2 border-t-slate-300 pl-2 pr-2'/>
       </div>
       </div>
      <div className='flex flex-col pl-4 font-normal text-xl'>
        <ul className='flex flex-col gap-2'>
          <li><span>✔️</span><span className='font-bold'>Opportunities:</span>{data.description}</li>
          <li><span>✔️</span>100% live learning with experts instructors</li>
          <li><span>✔️</span>Pay After Placement</li>
        </ul>
      </div>
      <div className='flex flex-col justify-center p-4'>
       <button  onClick={()=>navigate('/ExploreCourses/description',{state:{...data}})} className='font-normal text-xl bg-red-500 text-white p-3 rounded-lg'>View Details</button>
      </div>
        </div>
     </div>
     <ToastContainer/>
    </div>
  )
}
