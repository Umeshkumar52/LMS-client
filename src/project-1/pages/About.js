import React, { useState } from 'react'
import HomeLayout from '../HomeLayout'
import img from '../imgages/pexels-luis-gomes-546819.jpg'
import img1 from '../imgages/pexels-luis-gomes-546819.jpg'
import img2 from '../imgages/Umesh kumar photo3.jpg'
export default function About() {
  return (
<HomeLayout>
  <div className='flex flex-col h-[90vh] p-12 items-center justify-center bg-slate-900'>
    <div className='ml-14 flex items-center justify-center gap-20'>
        <div className='flex gap-5 flex-col w-[40%]'>
            <h1 className='text-4xl font-extrabold italic text-yellow-500'>Affordable and quality education</h1>
           <p className='text-white font-bold'>
            Our goal is to provide the Affordable and quality education to the world.
            We are providing the platform for the aspiring teachers and studentsto 
            share tgeir skills , creativity and knowledge to each other to empower
            and contribute in the growth and wellness of mankind.
           </p>
        </div>
        <div className='flex justify-center w-[60%]'>
           <img src={img} className='h-1/2 w-1/2 shadow-2xl shadow-blue-950 rounded-xl border-opacity-0'/>
       </div>

     </div>
  </div>
</HomeLayout> 
  )
} 
