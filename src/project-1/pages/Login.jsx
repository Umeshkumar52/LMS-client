import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../Reducer/Slices/authSliceReducer';
import { Link, useNavigate } from 'react-router-dom';
import { error } from 'autoprefixer/lib/utils';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const token=window.localStorage.getItem("token")
  const logeddIn=window.localStorage.getItem("logeddIn")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [loginData,setloginData]=useState({
    Email:'',
    password:''
  })
  async function loginDetail(event){
     const {name,value}=event.target;
     setloginData({
     ...loginData,
     [name]:value  
    })}
   async function onLogin(event){
      event.preventDefault();
     const response=await dispatch(login(loginData))
   
     if(!response.payload) return
     navigate('/')
   }   
  return (
    <div className='h-screen w-full flex justify-center items-center'>
    <form onSubmit={onLogin} className='h-fit w-fit px-10 py-5 flex flex-col items-center justify-center rounded-lg p-6 gap-5'>
       <h1 className='font-extrabold text-3xl text-[#212ed9]'>Login</h1>
          <div className=' w-full flex flex-col items-center justify-center gap-4'>
             <input type='Email' onChange={loginDetail} name='Email' value={loginData.Email} placeholder='E-mail'  className='bg-white w-full border-2 border-blue-100 p-3 rounded'/>
             <div className='flex w-full flex-col gap-2'>
             <input type='password' onChange={loginDetail} name='password' value={loginData.password} placeholder='Password' className='bg-white w-full border-2 border-blue-100 p-3 rounded'/>
             <Link to='/forgetpassword' className='font-extrabold text-blue-700 hover:text-blue-900'>Forget password</Link>
             </div>
             <button className=' w-full bg-green-400 hover:bg-[#1d9119f6] text-white p-3 text-xl font-extrabold rounded'>Login</button>                
              <p className='text-xl'>
              <span className='text-yellow-500 font-bold'>I have not a account ?</span> <Link to='/SignUp' className='text-blue-800 font-bold'>Register</Link>
              </p>
          </div>
    </form>
    <ToastContainer/>
  </div>
  )
}
