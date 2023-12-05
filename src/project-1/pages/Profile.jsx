import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import avatar from '../imgages/profile.png'
import { getProfile } from '../Reducer/Slices/authSliceReducer';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
  const user=useSelector((state)=>{return state.auth.user}) 
  // console.log("use",user.avatar.secure_URL);
  // const dispatch=useDispatch()
  //  useEffect(()=>{
  //   async function profile(){
  //     await dispatch(getProfile())
  //  } 
  //  profile()
  //  },[])

  return (
    <div className='w-full h-screen bg-[#1a193f] flex flex-col items-center'>
    {(user)?
     <div className=' h-screen w-full flex flex-col items-center p-6 gap-2'>
     <div className=' flex justify-center items-center'>
     {/* src={(user.avatar.secure_URL)?user.avatar.secure_URL:avatar */}
      <img src={avatar} id='profilePicture' className='w-12 h-12 rounded-full' />
     </div>
     <div className='font-extrabold text-yellow-400 items-center flex flex-col rounded text-xl gap-5'>
     <p>Id  <span className='font-bold text-white'>{user._id}</span></p>
     <p>FullName  <span className='font-bold text-white'>{user.FullName}</span></p>
     <p>Email  <span className='font-bold text-white'>{user.Email}</span></p>
     <p>Role  <span className='font-bold text-white'>{user.role}</span></p>
     <p>createdAt  <span className='font-bold text-white'>{user.createdAt}</span></p>
     <p>UpdatedAt  <span className='font-bold text-white'>{user.updatedAt}</span></p>
    
     </div>
     </div>:""
     }
     <ToastContainer/>
    </div>
  )
}
