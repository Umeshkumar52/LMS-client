import React, { useState } from 'react'
import avatar from '../imgages/profile.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Register } from '../Reducer/Slices/authSliceReducer'
import Value from 'autoprefixer/lib/value'
import { error } from 'autoprefixer/lib/utils'
import {ToastClassName,ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpiner from '../components/LoadingSpiner'
export default function SignUp(){
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [prevImg, setPrevImg]=useState('')
  const [isLoading,setIsLoading]=useState(false)
  const [signUpDAta,setSignUpDAta]=useState({
    FullName:'',
    Email:'',
    password:'',
    avatar:''
  })
  console.log("signUPDATA",signUpDAta);
  function signDetails(event){
     const {name,value}=event.target;
     setSignUpDAta({
     ...signUpDAta,
     [name]:value
     
     })
   }
function getImg(event){
  event.preventDefault()
  const uploadImg=event.target.files[0]
  if(uploadImg){
    setSignUpDAta({
      ...signUpDAta,
      avatar:uploadImg
    })
  
    const fileReader=new FileReader()
    fileReader.readAsDataURL(uploadImg)
    fileReader.addEventListener("load",function(){
      setPrevImg(this.result)
    })
  }
}
async function onRegister(event){
  event.preventDefault()
const formData=new FormData();
formData.append("FullName",signUpDAta.FullName);
formData.append("Email",signUpDAta.Email);
formData.append("password",signUpDAta.password);
formData.append("avatar",signUpDAta.avatar);
console.log("sign",signUpDAta);
setIsLoading(true)
const response=await dispatch(Register(formData))
setIsLoading(false)
if(!response.payload) return
navigate('/')
// (response.payload.user.role=='ADMIN')?navigate('/admindashboard'):navigate('/userdashboard')
}
  return (   
    <div className='flex flex-col justify-center items-center bg-[#ffffffe5] h-screen w-full'>
      {(!isLoading)?<form onSubmit={onRegister} encType='multipart/form-data' className='flex flex-col items-center justify-center h-fit py-5 px-10 w-fit bg-[#dfdede] rounded-lg p-4  gap-3 '>
         <h1 className='font-extrabold text-xl text-green-500'>Registration</h1>
         {/* <div className='flex flex-col tems-center justify-center'> */}
          <label htmlFor='image_uploads' className='cursor-pointer'>
            {(prevImg)?(
            <img src={prevImg} className='h-12 w-12 m-auto rounded-full'/>):(
            <img src={avatar}  className='h-12 w-12 m-auto rounded-full'/>)}
          </label>
          <input 
          type='file'
          id='image_uploads'
           accept='jpg,png,svg,jpeg'
           className='hidden'
           name='image_uploads'
          onChange={(event)=>getImg(event)}
          />
            <div className='flex flex-col items-center justify-center gap-1'>
               <label htmlFor='FullName'>Name
                <input onChange={signDetails} value={signUpDAta.FullName} type='text' name='FullName' placeholder='Name'  className='w-full text-black rounded bg-[#d0cdd3] px-3 py-2 font-semibold '/>
                </label>
               <label htmlFor='Email' >  E-mail
                <input onChange={signDetails} value={signUpDAta.Email} type='Email' name='Email' placeholder='E-mail'  className='w-full text-black rounded bg-[#d0cdd3] px-3 py-2 font-semibold '/>
                </label>
               <label htmlFor='password'>Password
                <input onChange={signDetails} value={signUpDAta.password} type='password' name='password' placeholder='Password' className=' w-full text-black rounded bg-[#d0cdd3] px-2 py-2  font-semibold'/>
              </label>
              <button type='submit' className=' w-full bg-[#3713ee] hover:bg-[#6207e2f6] p-1 text-white font-extrabold mt-3 rounded'>Create account</button>
            </div>            
            <p><span className='text-blue-500 text-xl'>Allready have an account ?</span> <Link to='/Login' className='text-accent text-xl font-semibold text-yellow-500'>Login</Link></p>      
      </form>
      :<LoadingSpiner/>
      }
      <ToastContainer/>
    </div>
  )
}
