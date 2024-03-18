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
   const response=await dispatch(createCourse(formData))
   setIsLoading(false)
  }
  return (
    <div className='flex items-center justify-center py-4 lg:h-[100%] xl:h-screen'>
     {(!isLoading)?
      <form onSubmit={courseHandler} encType='multipart/form-data' className='flex p-2 text-white flex-col justify-center items-center  w-[16rem] lg:w-fit'>
         <h1 className='text-2xl font-bold text-yellow-400'>Create Course</h1>
         
       <div className=' flex flex-col justify-center items-center gap-0 '>
       <ul className=' font-serif flex flex-col gap-2'>
        <label htmlFor='tittle '> Tittle<br/>
         <input type='text' name='tittle' autoCorrect='' autoComplete='' value={createCourse.tittle} placeholder='Tittle of the course'  onChange={inputHandaller} className='bg-white border-2 px-2 py-1 w-full'/>
         </label>
         <label htmlFor='mentor' >Create By<br/>
         <input type='text' name='createBy'  value={createCourse.createBy} placeholder='Enter the mentor name' onChange={inputHandaller} className='border-2 px-2 py-1 bg-white  w-full'/>
         </label>
         <label htmlFor='thumnail '>Thumnail<br/>
         <input type='file' name='thumnail'  value={createCourse.thumnail} onChange={getImg} placeholder='select file' className='bg-white w-full'/>
         </label>
        <label htmlFor='description' >Description<br/>
          <textarea placeholder='Description...' name='description' value={createCourse.description} onChange={inputHandaller} className='border-2 px-2 py-1 bg-white  w-full h-[20vh]'/>
        </label>
        <label htmlFor='description' >
          <button className='border-2  bg-indigo-700 hover:bg-indigo-900 rounded-md p-2 text-white font-bold  w-full'>Create Course</button>
        </label>
          </ul>
          </div>
      </form>
      :<LoadingSpiner/>}
      <ToastContainer/>
 </div>
  )
}
