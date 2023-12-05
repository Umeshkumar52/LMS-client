import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addLecture } from '../Reducer/Slices/CourseSliceReducer';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingSpiner from '../components/LoadingSpiner.jsx'
export default function AddLectures() {
  const {state}=useLocation()
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const [data,setLectureData]=useState({
        tittle:'',
        description:'',
        lecture:''
    })
   const [isLoading,setIsLoading]=useState(false)
    function inputHandller(event){
      const {name,value}=event.target;
     setLectureData({
        ...data,
        [name]:value
     })}
  
    function getLecture(event){
      event.preventDefault()
      const uploadImg=event.target.files[0]
      if(uploadImg){
        setLectureData({
          ...data,
          lecture:uploadImg
        })
      }
    }
    const formData=new FormData()
    formData.append("tittle",data.tittle)
    formData.append("description",data.description)
    formData.append("lecture",data.lecture)
    const lecture={
      id:state._id,
      data:formData
    }
        async function addLectures(event){
      event.preventDefault();
      setIsLoading(true)
     const response =await dispatch(addLecture(lecture))
     if(response.payload){
      setIsLoading(false)
      navigate('/ExploreCourses')
     }}
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
    {(!isLoading)?
      <form encType='multipart/form-data' className='flex flex-col items-center gap-2 w-[100vh] px-10 py-3 rounded-lg bg-blue-gray-300 '>
       <h1 className='font-semibold text-3xl'>Add Lectures</h1>
      <div className='flex flex-col w-full'>
      <label htmlFor='tittle'>Tittle</label><input type='text' name='tittle' onChange={inputHandller} placeholder='Enter the tittle' className='border-4 px-2 border-gray-950 rounded w-full'/>
      <label htmlFor='description'>Description</label><textarea name='description' onChange={inputHandller} placeholder='Enter the description about course' className='border-4 px-2 border-gray-950 rounded w-full'/>
      </div>
      <label htmlFor='addLectures' className='w-full'><div className='flex items-center justify-center border-slate-700 border-4 rounded py-8 w-full'>Upload Lecture</div>
      </label><input id='addLectures' name='lecture' className='hidden' onChange={getLecture}  type='file'/>
      <button onClick={addLectures} className='bg-blue-700 p-2 w-full rounded flex justify-center items-center text-white font-bold'>Add Lecture</button>
      </form>
     :<LoadingSpiner/>}
      <ToastContainer/>
    </div>
  )
}
