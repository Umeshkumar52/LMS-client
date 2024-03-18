import React from 'react'
import {useSelector } from 'react-redux'
import avatar from '../imgages/profile.png'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../Reducer/Slices/authSliceReducer';
export default function Profile(){
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector((state)=>{return state.auth.user}) 
  console.log("user",user);
  const [newImg, setNewImg]=useState('')
  const [isLoading,setIsLoading]=useState(false)
  const [profileDAta,setProfileDAta]=useState({
    FullName:user.FullName,
    Email:user.Email,
    avatar:""
  })
  console.log("img",newImg);
  function profileDetails(event){
     const {name,value}=event.target;
     setProfileDAta({
     ...profileDAta,
     [name]:value
     })}
function getImg(event){
  event.preventDefault()
  const uploadImg=event.target.files[0]
  if(uploadImg){
       setProfileDAta({
      ...profileDAta,
      avatar:uploadImg
    })
    const fileReader=new FileReader()
    fileReader.readAsDataURL(uploadImg)
    fileReader.addEventListener("load",function(){
      setNewImg(this.result)
    })
  }
}
async function profileHandler(event){
  event.preventDefault()
const formData=new FormData();
formData.append("FullName",profileDAta.FullName);
formData.append("Email",profileDAta.Email);
if(profileDAta.avatar){
  formData.append("avatar",profileDAta.avatar);
}
setIsLoading(true)
const response=await dispatch(updateProfile(formData))
setIsLoading(false)
}
let url=''
if(user.avatar){
 url=user.avatar.secure_URL
}
return (
    <div className='flex flex-col justify-center items-center h-[100%] py-4 w-full'>
    <form onSubmit={profileHandler} className='flex flex-col items-center justify-center h-fit py-5 px-10 w-fit rounded-lg p-4  gap-3 '>
       <h1 className='font-extrabold text-xl text-green-500'>Profile</h1>
        <label htmlFor='image_uploads' className='cursor-pointer'>
         {(newImg)?
          <img src={newImg} className='h-12 w-12 m-auto rounded-full'/>:
          (url.length>15)?
            <img src={url} className='h-12 w-12 m-auto rounded-full'/>:
            <img src={avatar} className='h-12 w-12 m-auto rounded-full'/>
         }
        </label>
        <input 
        type='file'
        id='image_uploads'
         accept='jpg,png,svg,jpeg'
         className='hidden'
         name='image_uploads'
        onChange={(event)=>getImg(event)}
        />
          <div className='w-full flex flex-col items-center justify-center gap-1'>
             <label htmlFor='FullName'>Full Name
              <input onChange={profileDetails} value={profileDAta.FullName} type='text' name='FullName' placeholder='Full Name'  className='w-full text-black rounded bg-[#d0cdd3] px-3 py-2 font-semibold '/>
              </label>
             <label htmlFor='Email' >E-mail
              <input onChange={profileDetails} value={profileDAta.Email} type='Email' name='Email' placeholder='E-mail'  className='w-full text-black rounded bg-[#d0cdd3] px-6 py-2 font-semibold '/>
              </label>
            <button type='submit' className=' w-full bg-[#3713ee] hover:bg-[#6207e2f6] p-1 text-white font-extrabold mt-3 rounded'>update</button>
          </div>       
    </form>
    <ToastContainer/>
  </div>
  )
}