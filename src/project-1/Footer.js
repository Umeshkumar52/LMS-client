import React from 'react'
import arrow from './imgages/rightArrow.png'
import { Link } from 'react-router-dom'
import { RiCustomerService2Fill } from "react-icons/ri";
export default function Footer() {
  
  return (
   <div className='flex flex-col w-full  pl-2 pb-20 font-sans text-[#ccd3ccf0] gap-8 bg-black'>
    <div className='flex flex-col gap-6  lg:justify-between'> 
     <div className='flex flex-col gap-2 pt-4 '>
      <img/>
      <ul className='flex flex-col gap-2'>
        <li><span>support@upSkills.com</span></li>
        <li className='flex gap-2 items-center'><RiCustomerService2Fill className='text-white text-2xl'/> <span>+917247800984</span></li>
      </ul>
      <ul className='flex gap-4'>
        <li><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a></li>
       <li> <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a></li>
      <li> <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a></li>
      </ul>
     </div>
   
     <fieldset className="form-control">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join bg-slate-500 w-16">
        <input type="text" placeholder="username@site.com" className="pt-2 pb-2 bg-slate-500 " /> 
        <button className="bg-indigo-800 p-3 ">Subscribe</button>
      </div>
    </fieldset>
    
     </div>

    <div className='flex flex-col lg:flex-row gap-16 lg:gap-28'>
     <div className='flex flex-col gap-6'>
      <h1 className='text-3xl font-bold text-white'>Company</h1>
      <hr className='border-6  border-red-900 w-64 '/>
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
      <hr className='border-6 border-red-900 w-64'/>
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
