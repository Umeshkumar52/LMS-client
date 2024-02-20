import React from 'react'
import { Carousel } from '@material-tailwind/react'
import CoursesSlide from '../components/CoursesSlide'
import { Link } from 'react-router-dom'
import HomeLayout from '../HomeLayout'
import img from '../imgages/pexels-sharad-kachhi-3937174.jpg'
import {ToastClassName,ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import  {useDispatch, useSelector}  from 'react-redux'
import { useEffect } from 'react'
import { allCourses } from '../Reducer/Slices/CourseSliceReducer'
export default function Home({children}){
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <HomeLayout>
  <div className='w-full h-cover bg-[#060316] flex flex-col items-center py-6 justify-center gap-16 '>
   <div className=' w-full flex flex-col items-center justify-center gap-16 pt-10 lg:pt-16 lg:flex-row lg:p-10'>
     <div className='flex justify-center items-center flex-col gap-5'>
      <div className='flex flex-col justify-center pl-3 pr-3 gap-5'>
         <h1 className='lg:text-3xl  text-2xl font-bold text-white'>
            Find out best <span className='text-yellow-400'>online courses</span>
         </h1>        
         <p className='text-white w-[16rem] lg:w-[20rem]'>
           We have a large library of courses taught by highly skilled and qulalified daculties at a very affordable cost.
        </p>
        <div className='flex gap-5 '>
            <button className='bg-yellow-400 font-normal rounded-xl text-xl p-1 text-white border-4 border-white'><Link to='ExploreCourses'>ExploreCourses</Link></button>
            <button className='focus-current text-white font-normal text-xl p-1 rounded-xl border-4 border-yellow-400'><Link to='ContactUs'>ContactUs</Link></button>
        </div>
      </div>
     </div>
     <div className=' flex justify-center items-center'>
        <img src={img} className=' h-[11rem]  w-[17rem] rounded-tr-2xl rounded-bl-2xl  shadow-2xl'/>
     </div>
     </div>
{/* paragraph */}
     <div className='flex flex-col gap-5 items-center justify-center text-slate-50 '>
      <h1 className='font-bold text-2xl text-slate-400 lg:text-4xl '>Upgrade with UpSkills</h1>
      <div className='pl-3 pr-3 lg:w-[50%]'>
        <p className='flex flex-col items-center justify-center gap-1 text-lg font-normal'>
         Upskills is your one stop shop for upscaling. Get maximum value for time
         and resources you invest, with job ready courses & high technology
         available at the lowest cost.
        </p>
      </div>
        <button className='bg-red-500 rounded-lg p-2 font-normal text-xl '>Explore carear</button>
     </div>
 {/* detailed our course */}
 <div className='flex flex-wrap mx-2 gap-8 justify-center items-center'>
   <div className='bg-[#ffffff] w-[17rem] lg:w-[25rem] rounded-lg flex pl-2  gap-2 shadow-lg shadow-white'>
      <img src='' className='lg:w-25 lg:h-25'/>
      <div className='flex flex-col gap-1'>
         <span className='text-2xl font-bold'>55%</span>
         <span className='text-xl font-normal'>Average Salary Hike</span>
      </div>
   </div>
    <div className='bg-[#ffffff] w-[17rem] lg:w-[25rem] rounded-lg flex pl-2  gap-2 shadow-lg shadow-white'>
      <img src='' className='w-25 h-25'/>
      <div className='flex flex-col gap-1'>
         <span className='text-2xl font-bold'>600+</span>
         <span className='text-xl font-normal'>Different Course</span>
      </div>
   </div>  
    <div className='bg-[#ffffff] w-[17rem] lg:w-[25rem] rounded-lg flex pl-2  gap-2 shadow-lg shadow-white'>
      <img src='' className='w-25 h-25'/>
      <div className='flex flex-col gap-1'>
         <span className='text-2xl font-bold'>1200+</span>
         <span className='text-xl font-normal'>Career Transitions</span>
      </div>
   </div>
    <div className='bg-[#ffffff] w-[17rem] lg:w-[25rem] rounded-lg flex pl-2  gap-2 shadow-lg shadow-white'>
      <img src='' className='w-25 h-25'/>
      <div className='flex flex-col gap-1'>
         <span className='text-2xl font-bold'>400+</span>
         <span className='text-xl font-normal'>Hiring Placements</span>
      </div>
   </div>

 </div>
{/* Our courses */}
<div className='flex flex-col justify-center items-center gap-4 w-full'>
   <div className='flex flex-col text-white justify-center m-4 items-center w-full gap-4'>
      <h1 className='text-3xl text-slate-300 font-bold'>Our Courses</h1>
      <h2 className='text-lg mx-2 font-serif'>Practice-Based Learning Tracks, <span className='text-red-500 text-xl'>Superchanged By A.I.</span></h2>
   </div>
<div className=' w-full flex flex-col items-center'>
   <CoursesSlide/>
</div>
</div>
 
<div className='mx-1 rounded-xl p-1 shadow-green-500 shadow-lg bg-gradient-to-l from-green-700 to-green-100  flex flex-col justify-center items-center'>
   <div className=' text-black flex gap-1 flex-col justify-center items-center '>
   <h1 className='flex gap-1 text-3xl font-bold'><img src='' alt=''/>Prepleaf</h1>
   <span className='text-white'>by UpSkills</span>
   </div>
   <p className='text-xl font-sarif text-black '>If you are sturding in college, check courses offer by prepleaf. <Link className='text-red-500'>Click Here</Link></p>
</div>
     {/* our achievers works with */}
    <div className=' flex flex-col justify-center items-center gap-4'>
       <h1 className='text-2xl text-slate-300'>Our Achievers Work With</h1>
       <div className="carousel w-[70vh] lg:w-[150vh] xl:w-[220vh] px-6 overflow-y-hidden rounded flex gap-7">
  <div id="item1" className="carousel-item h-20 w-[70vh]">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnPHBFjeg0f_XtIWySMEvS0GHjiTjCaKcc8ikQRgTnw&s" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item h-20 w-[70vh]">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNWhmIPM5R9n8DAgbV7gdCDIL1UnIHiySNKFX3DH1wQ&s" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item h-20 w-[70vh]">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmHqfZdXNdY49YgthuTqdq3GZQuGA8mRi5AxBEkIhBg&s" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item h-20 w-[70vh]">
    <img src="https://static.agilitycms.com/copy-of-copy-of-blog-covers-2021-11-11t105359.633.jpg" className='w-full' />
  </div>
  <div id="item5" className="carousel-item h-20 w-[70vh]">
    <img src="https://newsroom.paypal-corp.com/image/pp_h_rgb_logo_tn.jpg" className='w-full'/>
  </div>
  <div id="item6" className="carousel-item h-20 w-[70vh]">
    <img src=" https://www.digitalcitizen.life/wp-content/uploads/2017/02/microsoft.png" className='w-full'/>
  </div>
    </div> 
      <div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
     </div>
    </div>
    
{/* Success Stories */}
    <div>
     <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className='text-4xl font-semibold text-[#b3b2b8]'>Success Stories</h1>
      <div className="carousel mx-1 overflow-y-hidden w-[65vh] lg:w-[135vh] 2xl:w-full flex gap-4 rounded  h-[18rem]">
  <div id="item1" className="carousel-item border-2 px-2 rounded-xl border-slate-600  overflow-y-hidden w-[58vh] lg:w-[60vh] border-6  flex flex-col items-center">
    <img src='https://media.licdn.com/dms/image/D4D03AQGG7VUTDKyScg/profile-displayphoto-shrink_800_800/0/1674759656207?e=2147483647&v=beta&t=gTerqIlvkkgCMcqt_ee7nV1Szf1q1J5w-ZuzNLmo1Dk' className="w-24 h-24 rounded-full"/>
    <h1 className=' text-xl font-semibold text-white'>Pragyesh Kumar
    <span class="relative -top-7 -left-4 flex h-3 w-3 rounded-full">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
    </h1>
    <h2 className='italic text-slate-100'>Full stack web developer</h2>
    <p>There are many platforms that bolster an individual's "knowledge" to show up to work and just do their tasks. But with Masai, it is quite evident that the individuals are given a well-rounded education into the different aspects besides programming that go into software engineering. The college curriculum while focusing on the theoretical aspects of programming hasn't really evolved to keep pace with the practical aspects of software engineering. Companies too can benefit significantly by sourcing developers from Masai as they have good familiarity with the tools and processes that go into building software solutions. The dominant trait amongst Masai graduates has mostly been to focus on gaining more knowledge.</p>
  </div> 
  <div id="item2" className="carousel-item px-2 border-2 rounded-xl border-slate-600 p-2 overflow-y-hidden  w-[55vh] lg:w-[60vh] flex flex-col items-center">
    <img src="https://media.licdn.com/dms/image/D4D03AQGiu_zF5heWoQ/profile-displayphoto-shrink_800_800/0/1681468435631?e=2147483647&v=beta&t=K9IbkIzoMdUARrfNbo6xXmu3sSFx4h5EjQFZBvGWUUI" className="w-24 h-24 rounded-full" />
    <h1 className='text-xl font-semibold text-white'>Surbhi Sudan
    <span class="relative -top-7 -left-4 flex h-3 w-3 rounded-full">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
    </h1>
   <h2 className='italic text-slate-100'>Data analytics</h2>
   <p>We were looking to hire entry-level developers and Masai more than delivered. Our selection rate from Masai's candidates is higher than other avenues of hiring and the process was completed in two days flat. The offer to joining ratio with Masai candidates was 100% which is awesome! The developers had a good foundation of the technologies they need to work with and could hit the ground running. We wholeheartedly recommend Masai to companies looking to hire entry-level developers quickly</p>
 </div> 
  <div id="item3" className="carousel-item px-2 border-2 rounded-xl border-slate-600 p-2 overflow-y-hidden w-[55vh] lg:w-[60vh] flex flex-col items-center">
    <img src="https://media.licdn.com/dms/image/D4E03AQHffAM2Cg4EbA/profile-displayphoto-shrink_800_800/0/1679688777409?e=2147483647&v=beta&t=RMBQBPaSg_hLQNbQGvjtaeV1Cdzz-sAJgbEl7ekgdNk" className="w-24 h-24 rounded-full" />
    <div className='flex flex-col gap-0'>
    <h1 className=' text-xl font-semibold text-white'>Rishabh Singh
    <span class="relative -top-7 -left-4 flex h-3 w-3 rounded-full">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
    </h1>
    <h2 className='italic text-slate-100'>Data Engineer</h2>
    </div>
    <p>We would like to extend our heartfelt appreciation to Masai for the exceptional talent we have had the privilege of working with. The hires from Masai have consistently showcased their strong work ethic and professionalism. Their technical expertise and commitment to excellence have been invaluable to our projects. They have seamlessly integrated into our teams, collaborating with colleagues and bringing fresh perspectives to the table.</p>
  </div> 
  <div id="item4" className="carousel-item px-2 border-2 rounded-xl border-slate-600 p-2 overflow-y-hidden w-[55vh] lg:w-[60vh] flex flex-col items-center">
    <img src="https://media.licdn.com/dms/image/D4D03AQHyiovAzmbowA/profile-displayphoto-shrink_800_800/0/1687349261682?e=2147483647&v=beta&t=nT1ZnmQWM3ww08jggbFMZoKSFMYMbB4EqIry1PIb17o" className="w-24 h-24 rounded-full" />
    <h1 className=' text-xl font-semibold text-white'>Sujal Kewet
    <span class="relative -top-7 -left-4 flex h-3 w-3 rounded-full">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </span>
    </h1>
    <h2 className='italic text-slate-100'>Full stack developer</h2>
    <p>We would like to extend our heartfelt appreciation to Masai for the exceptional talent we have had the privilege of working with. The hires from Masai have consistently showcased their strong work ethic and professionalism. Their technical expertise and commitment to excellence have been invaluable to our projects. They have seamlessly integrated into our teams, collaborating with colleagues and bringing fresh perspectives to the table. Notably, these individuals have demonstrated a remarkable ability to identify and implement innovative solutions using the latest technologies</p>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>

      {/* <Carousel className="rounded-xl w-[85%] h-[80vh]">
      <img
        src="https://img.freepik.com/free-photo/handsome-indian-man-with-laptop-while-sitting-near-fountain-city-center-day_231208-2779.jpg?size=626&ext=jpg&ga=GA1.1.1218979706.1701662461&semt=ais"
        alt="image 1"
        className="h-full w-full "
      />
      <img
        src="https://static6.depositphotos.com/1008303/626/i/450/depositphotos_6264776-stock-photo-asian-student-on-campus.jpg"
        alt="image 2"
        className="h-full w-full "
      />
      <img
        src="https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg"
        alt="image 3"
        className="h-full w-full "
      />
      <img
        src="https://img.freepik.com/free-photo/young-indian-man-standing-outdoor-with-laptop-front_231208-2774.jpg?size=626&ext=jpg&ga=GA1.1.1218979706.1701662461&semt=ais"
        alt="image 4"
        className="h-full w-full "
      />
      <img
        src="https://img.freepik.com/free-photo/thoughtful-woman-making-notes-sitting-bench-outdoors_1262-19084.jpg?size=626&ext=jpg&ga=GA1.1.1218979706.1701662461&semt=ais"
        alt="image 5"
        className="h-full w-full "
      />
    </Carousel>  */}
       <button className='text-normal text-white bg-red-600 px-2 py-1 rounded-lg'>View all</button>
     </div>

     <div>
      
     </div>
    </div>
  </div>
  {/* <ToastContainer/> */}
   </HomeLayout> 
  )
}
