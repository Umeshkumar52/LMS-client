import React from 'react'
import avatar from '../../imgages/profile.png'
export default function UserDashboard() {
  return (
    <div className='relative flex flex-col overflow-hidden justify-center items-center gap-20 '>
    <div className='fixed right-0 left-0 top-0 w-full h-[12vh] bg-slate-300 flex flex-row items-center'>
    <div className='absolute left-10 flex flex-row gap-5 '>
       <img src={avatar}/>
       <h2>
        Hi user
       </h2>
    </div>
    <button className='absolute shadow-2xl shadow-indigo-800 right-14 bg-indigo-900 font-serif text-sm rounded-sm pl-2 pr-2 text-red-500 h-[70%]'>Logout</button>
       </div>
    <div className=''>
      
    </div>
   </div>
  )
}

