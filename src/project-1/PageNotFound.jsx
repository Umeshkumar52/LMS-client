import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function PageNotFound() {
  const Navigate=useNavigate()
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-[#0f1021] '>
      <h1 className='text-9xl text-white'>
        404
      </h1>
 
      <p className='bg-[#060316] text-sm rounded px-2 p-1 font-bold text-white rotate-12 absolute'>Page not found</p>
      <button className='bg-white border-2 border-yellow-500 text-yellow-900 rounded-xl'>
        <a>
            <span  onClick={()=>Navigate(-1)}>Go back</span>
        </a>
      </button>
    </div>
  )
}
