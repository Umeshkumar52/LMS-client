import React, { useState } from 'react'
import HomeLayout from '../HomeLayout'
import img from '../imgages/pexels-luis-gomes-546819.jpg'
import img1 from '../imgages/pexels-luis-gomes-546819.jpg'
import img2 from '../imgages/Umesh kumar photo3.jpg'
import { Carousel } from '@material-tailwind/react'
import Footer from '../Footer'
export default function About() {
  return (
<>
  <div className=' flex flex-col bg-[#43425d] w-full gap-16  py-10  items-center justify-center'>
    <div className=' flex flex-col items-center justify-center gap-14 lg:flex-row mx-14'>
        <div className='flex gap-5 flex-col mx-2 w-[60vh] lg:w-[50%]'>
            <h1 className='text-2xl font-extrabold italic text-yellow-500'>Affordable and quality education</h1>
           <p className='text-white text-sm font-normal'>
            Our goal is to provide the Affordable and quality education to the world.
            We are providing the platform for the aspiring teachers and studentsto 
            share tgeir skills , creativity and knowledge to each other to empower
            and contribute in the growth and wellness of mankind.
           </p>
        </div>
        <div className='flex justify-center  w-[65vh] lg:w-[135vh] 2xl:w-full'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPDpRt7dkbeA-Y1J63Kx9ZhEupSUuWICG4g&usqp=CAU' className='shadow-2xl origin-center rotate-4 skew-y-12 shadow-blue-950 rounded-xl border-opacity-0'/>
       </div>
     </div>
     {/* Carausol */}
    <div className='flex flex-col items-center'>
     <div className="carousel ml-4 gap-4 w-[300px] lg:w-[730px] xl:w-full h-[8rem] lg:h-[12rem] rounded-lg">
  <div id="item1" className="carousel-item  overflow-y-hidden w-[285px] lg:w-[60vh]">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full rounded-lg" />
  </div> 
  <div id="item2" className="carousel-item  overflow-y-hidden w-[285px] lg:w-[60vh]">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full rounded-lg" />
  </div> 
  <div id="item3" className="carousel-item  overflow-y-hidden w-[285px] lg:w-[60vh]">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full rounded-lg" />
  </div> 
  <div id="item4" className="carousel-item  overflow-y-hidden w-[285px] lg:w-[60vh]">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full rounded-lg" />
  </div>
     </div> 
     {/* <div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
     </div> */}
    </div>
  </div>
  <Footer/>
</> 
  )
} 
