import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateCourse } from '../Reducer/Slices/CourseSliceReducer'
import {ToastContainer } from 'react-toastify';
import LoadingSpiner from '../components/LoadingSpiner';
import 'react-toastify/dist/ReactToastify.css';
export default function UpdateCourse() {
  const [isLoading,setIsLoading]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {state}=useLocation()
    const [update,setUpdate]=useState({
        tittle:state.tittle,
        createBy:state.createBy,
        thumnail:'',
        description:state.description
    })
    function inputHandaller(event){
     const {name,value}=event.target
     setUpdate({
        ...update,
        [name]:value
     })
    }
    function getImg(event){
      event.preventDefault()
      const UploadImg=event.target.files[0]
      if(UploadImg){
        setUpdate({
          ...update,
          thumnail:UploadImg
        })
      }
    }
    console.log("update",update.tittle,update.thumnail);
    const formData=new FormData()
    formData.append("tittle",update.tittle)
    formData.append("createBy",update.createBy)
    formData.append("description",update.description)
    formData.append("thumnail",update.thumnail)
    const data={
      id:state._id,
      updateData:formData
    }
   async function UpdateCourse(event){
    event.preventDefault()
    setIsLoading(true)
    console.log(data);
   const response=await dispatch(updateCourse(data))
   console.log(response);
   setIsLoading(false)
   if(!response.payload)return
     navigate('/ExploreCourses')
   }
  return (
    <div className='flex items-center justify-center bg-slate-800 w-full h-screen'>
    {(!isLoading)?
    <form onSubmit={UpdateCourse} className='flex flex-col justify-center items-center rounded border-4 border-slate-700 bg-[#acb1b1f2] pt-10 p-2 h-fit w-[50%]'>
       <h1 className='text-3xl font-extrabold text-yellow-400'>Update Course</h1>
     <div className=' flex flex-col justify-center font-semibold text-black items-center gap-2 '>
      <label htmlFor='tittle '> Tittle<br/>
       <input type='text' name='tittle'  value={update.tittle} placeholder='Tittle of the course'  onChange={inputHandaller} className='border-2 px-2 py-1 border-slate-950 rounded-sm  w-[70vh]'/>
       </label>
       <label htmlFor='mentor'>Create By<br/>
       <input type='text' name='createBy' value={update.createBy} placeholder='Enter the mentor name' onChange={inputHandaller} className='border-2 px-2 py-1 border-slate-950 rounded-sm w-[70vh]'/>
       </label>
       <label htmlFor='thumnail ' >Thumnail<br/>
       <input type='file' name='thumnail' onChange={getImg} placeholder='select file' className='w-[70vh]'/>
       </label>
      <label htmlFor='description' >Description<br/>
        <textarea placeholder='Description...'value={update.description} name='description' onChange={inputHandaller} className='border-2 px-2 py-1 border-slate-950 rounded-sm w-[70vh] h-[20vh]'/>
      </label>
        <button className='border-2 bg-blue-700 rounded-md px-2 py-1 text-white font-bold  w-[70vh]'>Create Course</button>
        </div>
    </form>
    :<LoadingSpiner/>
    }
    <ToastContainer/>
</div>
  )
}
