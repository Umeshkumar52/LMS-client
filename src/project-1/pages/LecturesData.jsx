import React, { useEffect, useState } from 'react'
import LectursesCard from '../components/LectursesCard'
import { useLocation } from 'react-router-dom'
import { FaArrowLeft, FaDiscord, FaGithub, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export default function LecturesData() {
   const navigate=useNavigate()
      const [lectureUrl,setLectureUrl]=useState()
    const {state}=useLocation()
    function dataFromChild(url){
     setLectureUrl(url)
    }
    let defaultUrl=lectureUrl
  return (
    <div className='w-full overflow-hidden flex flex-col lg:flex-row '>
      {(state.lectures.length!=0)?
      <div className='sticky top-0 pb-4 bg-white w-full gap-1 flex flex-col items-center justify-center'>
      <div className='w-full text-sm flex px-6 gap-6 justify-between items-center'>
     <FaArrowLeft onClick={()=>navigate(-1)} className='text-black cursor-pointer font-bold h-6 w-6'/>
     <div className='flex flex-col'>
      <h1 className='text-lg font-normal text-black py-4 '><span className='text-black font-semibold'>Now playing</span>- Admin Dashboard</h1>
      <div className='relative left-20 flex gap-3 items-center'>
        <h2 className='text-indigo-800 font-semibold'>Autoplay</h2>
        <input type="checkbox" className="toggle h-4 w-10 toggle-info" unchecked />
        </div>
        </div>
      </div>
        <div className='relative w-full bg-white'>
        <video src={lectureUrl} controls className='w-full'/>
      </div>
      </div>:''}
      {(state.lectures.length!=0)?
     <div className='w-full lg:w-[60%] lg:h-[100%]'> 
     <div className='bg-white text-black flex flex-col gap-1 py-2 pl-4'>
      <h2 className='font-semibold'>Social media</h2>
      <ul className='flex gap-3'>
        <li><FaInstagram/></li>
        <li><FaFacebookSquare/></li>
        <li><FaWhatsapp/></li>
        <li><FaTwitter/></li>
        <li><FaGithub/></li>
        <li><FaDiscord/></li>
        <li><FaTelegram/></li>
      </ul>
     </div>
     {
       state.lectures.map((Element,index)=>{
        return <LectursesCard key={Element._id} serialNum={index} data={dataFromChild} lecturesData={Element}/>
       })
      }
     </div>:
     <div className='w-full h-[100%] flex justify-center mt-[8rem]'>
      <h1 className='text-3xl text-white font-sans'>Lectures will be uploaded as soon as possible</h1>
     </div>
   }
    </div>
  )
}
