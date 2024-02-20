import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateCourse } from '../Reducer/Slices/CourseSliceReducer'
import {ToastContainer } from 'react-toastify';
import LoadingSpiner from '../components/LoadingSpiner';
import 'react-toastify/dist/ReactToastify.css';
export default function UpdateCourse() {
  const [isLoading,setIsLoading]=useState(false)
  const [prevImg,setPrevImg]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {state}=useLocation()
   const _id=state._id;
    const [update,setUpdate]=useState({
        tittle:state.tittle,
        createBy:state.createBy,
        thumnail:state.thumnail.secure_url,
        description:state.description
    })
    function inputHandaller(event){
     const {name,value}=event.target;
     setUpdate({
        ...update,
        [name]:value
     })
    }
    function getImg(event){
      event.preventDefault();
      const uploadImg=event.target.files[0];
      if(uploadImg){
        setUpdate({
          ...update,
          thumnail:uploadImg
        })
        const fileReader=new FileReader();
        fileReader.readAsDataURL(uploadImg);
        fileReader.addEventListener("load",function(){
          setPrevImg(this.result)
        })
      }
    }
       async function up(event){
        event.preventDefault()
        const formData=new FormData()
        formData.append("tittle",update.tittle)
        formData.append("createBy",update.createBy)
        formData.append("description",update.description)
        formData.append("thumnail",update.thumnail)
        console.log("gfdgd",formData.get("thumnail"));
    setIsLoading(true)
   const response=await dispatch(updateCourse(_id,formData))
   setIsLoading(false)
   if(!response.payload){
     navigate('/ExploreCourses')
}}
  return (
    <div className='flex items-center justify-center bg-[#2d2d31eb] py-2 w-full h-full lg:h-screen'>
    {(!isLoading)?
    <form  encType='multiparty/form-data' className='flex flex-col justify-center items-center font-serif rounded border-1 gap-4 text-white bg-[#2d2d31eb] w-[16rem] h-fit lg:w-[50%]'>
       <h1 className='text-2xl font-bold text-slate-300'>Update Course</h1>
     <div className=' flex flex-col justify-center items-center gap-2 '>
      <label htmlFor='tittle '> Tittle<br/>
       <input type='text' name='tittle'  value={update.tittle} placeholder='Tittle of the course'  onChange={inputHandaller} className='border-2 px-2 py-1 border-slate-950 rounded-sm  w-[70vh]'/>
       </label>
       <label htmlFor='mentor'>Create By<br/>
       <input type='text' name='createBy' value={update.createBy} placeholder='Enter the mentor name' onChange={inputHandaller} className='border-2 px-2 py-1 border-slate-950 rounded-sm w-[70vh]'/>
       </label>
       <label htmlFor='thumnail ' >Thumnail<br/>
       <input type='file' name='thumnail' value={update.thumnail.secure_url} onChange={getImg} placeholder='select file' className='w-[70vh]'/>
       </label>
      <label htmlFor='description' >Description<br/>
        <textarea placeholder='Description...'value={update.description} name='description' onChange={inputHandaller} className='border-2 px-2 py-1 border-slate-950 rounded-sm w-[70vh] h-[20vh]'/>
      </label>
        <button onClick={up} className='border-2 bg-blue-700 rounded-md px-2 py-1 text-white font-bold  w-[70vh]'>update Course</button>
        </div>
    </form>
    :<LoadingSpiner/>
    }
    <ToastContainer/>
</div>
  )
}
