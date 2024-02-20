import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { button } from '@material-tailwind/react';
import { useState } from 'react';
export default function SlideCourseCard({data}) {
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
    <div>
        <div  onClick={()=>navigate('/ExploreCourses/description',{state:{...data}})} className='bg-[#1a1d1af5] gap-2  w-[310px]  border-2 border-[#1a1d1af5] rounded-lg font-semibold flex flex-col pb-4 ' >
      <div className=' flex flex-col gap-1'>
       <div>
        <img src={secure_url} className='rounded-lg h-34 w-[29rem]' />
       </div>
       <div className='flex flex-col gap-0 pl-4 pr-4'>
       <h1 className='text-lg font-bold text-white'>{data.tittle}</h1>
       {/* duration */}
       <p className='font-normal'>Become job ready in 25 weaks</p>
       <hr className='flex-grow border-t-2 border-t-slate-100 pl-2 pr-2'/>
       </div>
       </div>
      <div className='flex flex-col pl-4 font-normal text-xl'>
        <ul className='flex flex-col gap-1 text-base'>
          <li className='font-small'><span>✔️</span><span className='font-semibold text-lg text-slate-200'>Opportunities:</span>{(!moredata)?
          <span>{data.description.slice(0,12)}{(data.description.length>12)?<button onClick={sliceMore} className='text-white font-semibold '>&nbsp; ...more</button>:""}</span>:(data.description)}{(moredata)?<button onClick={sliceLessData} className='text-white font-semibold'>&nbsp;...less</button>:""} </li>
          <li><span>✔️</span>100% live learning with experts instructors</li>
          <li><span>✔️</span>Pay After Placement</li>
        </ul>
      </div>
        </div>
       
    </div>
  )
}
