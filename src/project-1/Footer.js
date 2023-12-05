import React from 'react'
import arrow from './imgages/rightArrow.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  
  return (
   <div className='flex flex-col w-full pl-6 pb-20 font-sans text-[#ccd3ccf0] gap-8 bg-black'>
     <div className='flex flex-col gap-2 pt-10 pl-10 '>
      <img/>
      <ul className='flex flex-col gap-2'>
        <li><img src=''/> <span>support@upSkills.com</span></li>
        <li><img src=''/> <span>+917247800984</span></li>
      </ul>
      <ul>
        <li><img src='https://fontawesome.com/icons/github?f=brands&s=solid'/></li>
       <li><img src='https://fontawesome.com/icons/linkedin?f=brands&s=solid'/></li>
      </ul>
     </div>
    <div className='flex gap-48 pl-10'>
     <div className='flex flex-col gap-6'>
      <h1 className='text-3xl font-bold text-white'>Company</h1>
      <hr className='border-6  border-red-900 pl-4 pr-4'/>
  <div className='flex flex-row gap-20'>
    <div className='flex flex-col gap-1'>
      <Link>About us</Link>
      <Link>FAQ </Link>
      <Link>Privecy Policy </Link>
    </div>
    <div className='flex flex-col gap-2'>
      <Link>Contact us</Link>
      <Link>job Assurance </Link>
      <Link>Term and Conditions</Link>
    </div>
  </div>  
     </div>
      <div className='flex flex-col gap-6'>
      <h1 className='text-3xl font-bold text-white'>Products</h1>
      <hr className='border-6 border-red-900 pl-4 pr-4'/>
  <div className='flex flex-row gap-20'>
    <div className='flex flex-col gap-2'>
      <Link>UpSkills Lab</Link>
      <Link>Experience certificate </Link>
      <Link>Career</Link>
    </div>
    <div className='flex flex-col gap-2'>
      <Link>Job Portal</Link>
      <Link>Become an Affiliate</Link>
      <Link>Hiring</Link>
    </div>
  </div> 
     </div>   
    </div>
    
   </div>
  )
}
