import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Footer from './Footer'
import Home from './pages/Home'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import {logout } from './Reducer/Slices/authSliceReducer'
import Blogs from './pages/Blogs'
export default function HomeLayout({ children }) {
  const [toggle,setToggle]=useState(true)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const userData=useSelector((state)=>{
    return state.auth
  })
  console.log("userdata",userData);
  function open() {
    setToggle(false)
    const target = document.getElementsByClassName('drawer-side');
    target[0].style.width='261vh'
    // target[0].state.height='150vh'
  }
  function close() {
    setToggle(true)
    const toggleElement = document.getElementsByClassName('drawer-side')
    toggleElement[0].style.width ="0vh";
    // toggleElement[0].state.height='0vh'
  }
 async function logoutHandller(event){
  event.preventDefault()
  const response=await dispatch(logout())
  if(!response.payload){
    navigate('/')
  }
 }
  return (
    <div className=''>
      <div className='relative bg-[#1d1838]'>
        <div className='fixed flex  justify-between pl-4 pr-8 bg-[#060316] shadow-sm shadow-[#221243] h-12 w-full '>
         
         {(toggle)?
         <button className='ml-1 mt-1 text-yellow-400 text-xl' onClick={()=>open()}>Open</button>
         :<button className='ml-1 mt-1 text-yellow-400 text-xl' onClick={()=>close()}>Close</button>
         }
          <div className='flex items-center justify-center'>
         {
           (!userData.isLoggedIn)?
           <div className='flex gap-4'>
           <button className='border-2  rounded-lg text-xl font-sarif text-white bg-[#ee2222]  hover:bg-[#6c19f0] w-24'><Link to="SignUp">SignUp</Link></button>
           <button className='border-2  rounded-lg text-xl font-sarif text-white bg-[#0e4719] hover:bg-[#0c1]  w-24'><Link to='Login'>Login</Link></button>
           </div>
           : <div className='flex gap-4'>
            <button onClick={logoutHandller} className='border-2  rounded-lg text-xl font-sarif text-white bg-[#ee2222] w-24  p-1 hover:bg-[#6c19f0]  '>Logout</button>
           <button className='border-2  rounded-lg text-xl font-sarif text-white bg-[#0e4719] hover:bg-[#0c1] w-24 p-1   '><Link to='Profile'>Profile</Link></button>
           </div>
            }
         </div>
        </div>
       <div className="bg-[#f4f3f4]  fixed drawer-side w-0 h-[100%] top-12 overflow-hidden bg-slate-900 flex flex-col gap-8">
       
        {/* <div className='bg-slate-300 w-full h-[15vh] flex items-center justify-center'>
         {
           (!userData.isLoggedIn)?
           <div className='flex gap-10'>
           <button className='border-2  rounded-lg text-2xl font-sarif text-white bg-[#ee2222]  hover:bg-[#6c19f0] p-4 w-[25rem]'><Link to="SignUp">SignUp</Link></button>
           <button className='border-2  rounded-lg text-2xl font-sarif text-white bg-[#0e4719] hover:bg-[#0c1]  p-4 w-[25rem]'><Link to='Login'>Login</Link></button>
           </div>
           : <div className='flex gap-10  '>
            <button onClick={logoutHandller} className='border-2  rounded-lg text-2xl font-sarif text-white bg-[#ee2222] w-[25rem]  p-4 hover:bg-[#6c19f0]  '>Logout</button>
           <button className='border-2  rounded-lg text-2xl font-sarif text-white bg-[#0e4719] hover:bg-[#0c1] w-[25rem] p-4   '><Link to='Profile'>Profile</Link></button>
           </div>
            }
         </div> */}
            <div className='flex flex-col pl-16 text-2xl font-sarif'>
          <ul className="menu text-[#000000] font-semibold flex flex-col">
            <li className='hover:bg-[#e4ebe7] w-full p-4 rounded-lg' ><Link to='/'>Home </Link></li>
            <li className='hover:bg-[#e4ebe7] w-full p-4 rounded-lg' ><Link to='/About'>About </Link></li>
            <li className='hover:bg-[#e4ebe7] w-full p-4 rounded-lg' ><Link to='/Service'>Service </Link></li>
            <li className='hover:bg-[#e4ebe7] w-full p-4 rounded-lg' ><Link to='/Blogs'>Blogs </Link></li>
          {(userData.isAdmin)?
            <li className='hover:bg-[#e4ebe7] w-full p-4 rounded-lg' ><Link to='/CreateCourse'>CreateCourse</Link></li>
            :''} 
          </ul>   
          </div>
        </div>
      </div>
     
        {children}
      <Footer />
      <ToastContainer/>
    </div>

  )
}
