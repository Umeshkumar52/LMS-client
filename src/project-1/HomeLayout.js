import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Footer from './Footer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import {logout } from './Reducer/Slices/authSliceReducer'
import { VscThreeBars } from "react-icons/vsc";
import { IoIosArrowDown,IoIosArrowForward } from "react-icons/io";
export default function HomeLayout({ children }) {
  const [toggle,setToggle]=useState(false)
  const [userPofile,setUserProfile]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const userData=useSelector((state)=>{
    return state.auth
  })
  function openButton(){
    document.querySelector(".slideBar").style.width="60vh";
  }
  function closeButton(){
   document.querySelector(".slideBar").style.width="0px";
  }
  function profileOPener() {
    setUserProfile(true)
  }
  function profileOCloser(){
    setUserProfile(false)
  }
 async function logoutHandller(event){
  event.preventDefault()
  const response=await dispatch(logout())
  if(!response.payload){
    navigate('/')
  }
 }
 const user=useSelector((state)=>{return state.auth.user}) 
  return (
    <div className='relatve bg-slate-500 overflow-hidden'>
       <div className='flex justify-between bg-[#060316] shadow-sm shadow-[#221243] w-full '>  
       <label onClick={openButton} className='ml-6 cursor-pointer mt-2 text-xl font-bold'><VscThreeBars /></label>       
          <div className='flex items-center justify-center'>
         {
           (!userData.isLoggedIn)?
           <div className='flex gap-4 pt-2 pr-2'>
           <button className=' text-xl rounded font-sarif text-white bg-[#ee2222]  hover:bg-[#ee2245] p-1 pl-3 pr-3'><Link to="SignUp">SignUp</Link></button>
           <button className='text-xl rounded font-sarif text-white bg-[#0e4719] hover:bg-[#0e4723] p-1 pl-3 pr-3'><Link to='Login'>Login</Link></button>
           </div>
           : <div className='flex gap-4 pt-2 pr-2'>
            <button onClick={logoutHandller} className='border-1 rounded text-xl font-sarif text-white pl-3 pr-3 p-1 bg-[#ee2222]  hover:bg-[#ee2245]'>Logout</button>
           <button className='border-1 rounded text-xl font-sarif text-white bg-[#0e4719] hover:bg-[#0e4723] pl-3 pr-3 p-1  '><Link to='Profile'>Profile</Link></button>
           </div>
            }
         </div>
        </div>
{/* slide*/}
    <div className='slideBar top-0 fixed flex flex-col gap-4 w-0 min-h-screen bg-black  overflow-x-hidden transition duration-300 '>
    <div className='flex justify-center text-xl text-white font-semibold'>
    <button onClick={closeButton} onMouseDown={profileOCloser} className='pl-36 text-white mt-4'>✖ </button>
    </div>
     <ul  className="menu p-4 gap-1 text-base-content text-lg font-semibold">
   <div className='bg-slate-900 w-full'>
   {
   (user.FullName==null || undefined)?"":
  //  
   <div  className='flex w-full h-20 gap-2 text-xl font-bold justify-center items-center'>
          <img src='' className='w-[40%]'/>
          <div className='flex flex-col w-full'>
           <h2 className='text-xl font-serif text-red-600'>Hey </h2>
          <h2 className='text-yellow-400'>{user.FullName}</h2>        
        </div>
          {
          (!userPofile)? <div  onClick={profileOPener}><IoIosArrowForward/></div>:<div onClick={profileOCloser}><IoIosArrowDown/></div>
          }
       </div>
           }
           {(userPofile)?
         
           <ul className=''>
            <hr className=' h-1 bg-slate-800'/>
             <li className='w-full  rounded-lg' ><Link to='/myCourses'>My Course</Link></li>
            <li className='w-full  rounded-lg' ><Link to='/profile'>My Profile</Link></li>
            {(userData.isAdmin)?
            <li className='w-full  rounded-lg' ><Link to='/admin'>Dashboard</Link></li>
            :""
            //  <li className='w-full  rounded-lg' ><Link to='/user'>Dashboard</Link></li>
            }
            </ul>
           :""  
           }
        </div>
           <li className='w-full  rounded-lg' ><Link to='/'>Home </Link></li>
            <li className='w-full  rounded-lg' ><Link to='/About'>About </Link></li>
            <li className=' w-full  rounded-lg' ><a href='https://www.linkedin.com/in/umesh-kumar-b20088253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>Service </a></li>
          
          {(userData.isAdmin)?
            <li className=' w-full rounded-lg' ><Link to='/CreateCourse'>CreateCourse</Link></li>
            :''} 
    </ul>
    </div>
    {/* slide 2 */}
        {children}
      <Footer />
      <ToastContainer/>
    </div>

  )
}
