import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
export default function UserEnrollCoursesCard(data) {
  const navigate=useNavigate()
  return (
    <div>
    <div className='rounded-lg tracking font-semibold flex flex-col pb-4'>
     <div onClick={()=>navigate('/lectures',{state:data.data})} className='bg-[#1a1d1af5] border-2 border-[#1a1d1af5] rounded-lg font-semibold flex flex-col gap-2 pb-4 '>
     <div className=' flex flex-col gap-3'>
      <div>
       <img src={data.data.thumnail.secure_url} className='rounded-lg w-[29rem]' />
      </div>
      <div className='flex flex-col gap-3 pl-4 pr-4'>
      <h1 className='text-3xl font-bold'>{data.data.tittle}</h1>
      {/* duration */}
      <p className='font-normal text-xl'>Become job ready in 25 weaks</p>
      <hr className='flex-grow border-t-2 border-t-slate-300 pl-2 pr-2'/>
      </div>
      </div>
     <div className='flex flex-col pl-4 font-normal text-xl'>
       <ul className='flex flex-col gap-3'>
         <li><span>✔️</span>100% live learning with experts instructors</li>
         <li><span>✔️</span>Pay After Placement</li>
       </ul>
     </div>
     <div className='flex flex-col justify-center p-4'>
      {/* <button  onClick={()=>navigate('/ExploreCourses/description',{state:{...data}})} className='font-normal text-xl bg-red-500 text-white p-3 rounded-lg'>View Details</button> */}
     </div>
      </div>
    </div>
    <ToastContainer/>
   </div>
  )
}
