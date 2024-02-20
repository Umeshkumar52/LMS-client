import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { button } from '@material-tailwind/react';
export default function CourseCard({data}) {
  const [moredata,setMore]=useState(false)
  const secure_url=data.thumnail.secure_url
 const navigate=useNavigate()
 const dispatch=useDispatch()
 function sliceMore() {
  setMore(true)
}
function sliceLessData(){
  setMore(false)
}
  return (
    <div className='flex flex-wrap justify-center items-center'>
     <div className='rounded-lg tracking font-semibold flex flex-col pb-4'>
      <div className='bg-[#1a1d1af5] border-2 border-[#1a1d1af5] mx-3 rounded-lg font-semibold flex flex-col gap-2 pb-4 '>
      <div className=' flex flex-col gap-1'>
       <div>
        <img src={secure_url} className='rounded-lg w-[26rem]' />
       </div>
       <div className='flex flex-col gap-1 pl-4 pr-4'>
       <h1 className='text-lg text-white font-bold'>{data.tittle}</h1>
       {/* duration */}
       <p className='font-normal text-base'>Become job ready in 25 weaks</p>
       <hr className='flex-grow border-t-2 border-t-slate-300 pl-2 pr-2'/>
       </div>
       </div>
      <div className='flex flex-col pl-4 font-normal text-xl'>
        <ul className='flex flex-col gap-1 text-base'>
          <li><span>✔️</span><span className='font-bold'>Opportunities:</span>{(!moredata)?<span>{data.description.slice(0,20)}{(data.description.length>20)?<button onClick={sliceMore} className='text-white font-semibold '>&nbsp; ...more</button>:""}</span>:(data.description)}{(moredata)?<button onClick={sliceLessData} className='text-white font-semibold'>&nbsp;...less</button>:""} </li>
          <li><span>✔️</span>100% live learning with experts instructors</li>
          <li><span>✔️</span>Pay After Placement</li>
        </ul>
      </div>
      <div className='flex flex-col justify-center p-4'>
       <button  onClick={()=>navigate('/ExploreCourses/description',{state:{...data}})} className='font-normal text-xl bg-red-500 text-white p-3 rounded-lg'>View Details</button>
      </div>
        </div>
     </div>
    </div>
  )
}
