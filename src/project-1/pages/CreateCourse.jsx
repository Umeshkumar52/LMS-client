import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '../Reducer/Slices/CourseSliceReducer';
import LoadingSpiner from '../components/LoadingSpiner'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function CreateCourse() {
  const [isLoading,setIsLoading]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [createCourseData,setCreateCourseData]=useState({
    tittle:'',
    createBy:'',
    thumnail:'',
    description:'',
  })
  function inputHandaller(e){
    const {name,value}=e.target;
    setCreateCourseData({
      ...createCourseData,
      [name]:value
    } )
  }
  function getImg(event){
    event.preventDefault()
    const uploadImg=event.target.files[0]
    if(uploadImg){
      setCreateCourseData({
        ...createCourseData,
        thumnail:uploadImg
      })
    }
  }
  async function courseHandler(event){
    event.preventDefault();
    const formData=new FormData()
    formData.append('tittle',createCourseData.tittle)
    formData.append('createBy',createCourseData.createBy)
    formData.append('description',createCourseData.description)
    formData.append('thumnail',createCourseData.thumnail)
    setIsLoading(true)
    console.log(createCourse);
   const response=await dispatch(createCourse(formData))
   setIsLoading(false)
//  if(response){
//   navigate('/CreateCourse/CourseGreeting',{state:response.payload.message})
//  }
  }
  return (
    <div className='flex items-center justify-center bg-slate-800 w-full h-screen'>
     {(!isLoading)?
      <form onSubmit={courseHandler} encType='multipart/form-data' className='flex flex-col justify-center items-center  border-4 border-slate-800 bg-[#d6d6de] p-4 pt-20 rounded-lg w-fit px-10'>
         <h1 className='text-3xl font-extrabold text-yellow-400'>Create Course</h1>
       <div className=' flex flex-col justify-center items-center gap-3 '>
        <label htmlFor='tittle ' className='text-white font-bold '> Tittle<br/>
         <input type='text' name='tittle' autoCorrect='' autoComplete='' value={createCourse.tittle} placeholder='Tittle of the course'  onChange={inputHandaller} className='border-2 px-2 py-1 border-slate-950 rounded-sm text-slate-950 w-full'/>
         </label>
         <label htmlFor='mentor' className='text-white font-bold'>Create By<br/>
         <input type='text' name='createBy'  value={createCourse.createBy} placeholder='Enter the mentor name' onChange={inputHandaller} className='border-2 px-2 py-1 border-slate-950 rounded-sm text-slate-950  w-full'/>
         </label>
         <label htmlFor='thumnail ' className='text-white font-bold pl-14 '>Thumnail<br/>
         <input type='file' name='thumnail'  value={createCourse.thumnail} onChange={getImg} placeholder='select file' className='w-full'/>
         </label>
        <label htmlFor='description' className='text-white font-bold '>Description<br/>
          <textarea placeholder='Description...' name='description' value={createCourse.description} onChange={inputHandaller} className='border-2 px-2 py-1 border-slate-950 rounded-sm text-slate-950  w-full h-[20vh]'/>
        </label>
      
          <button className='border-2  bg-blue-700 rounded-md p-2 text-white font-bold  w-[60vh]'>Create Course</button>
       
          </div>
      </form>
      :<LoadingSpiner/>}
      <ToastContainer/>
 </div>
  )
}
