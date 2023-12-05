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
  <div className=' w-full h-cover bg-[#060316] flex flex-col items-center pb-10 justify-center gap-16 '>
   
   <div className=' w-full flex flex-col items-center gap-16 pt-[30vh] lg:flex-row p-10'>
     <div className='w-[50%] flex justify-center flex-col gap-5'>
      <div className='flex flex-col gap-5 w-[30rem]'>
         <h1 className='text-3xl font-bold text-white w-full'>
            Find out best <span className='text-yellow-400'>online courses</span>
         </h1>
         <p className='font-bold  text-white w-[24rem]'>
           We have a large library of courses taught by highly skilled and qulalified daculties at a very affordable cost.
        </p>
      </div>
        <div className='flex gap-5'>
            <button className='bg-yellow-400 font-normal rounded-xl text-xl p-1 w-38 text-white border-4 border-white'><Link to='ExploreCourses'>ExploreCourses</Link></button>
            <button className='focus-current text-white font-normal text-xl p-1 w-38 rounded-xl border-4 border-yellow-400'><Link to='ContactUs'>ContactUs</Link></button>
        </div>
     </div>
     <div className='w-[50%] flex justify-center items-center'>
        <img src={img} className='w-[100vh] h-[12rem] shadow-2xl shadow-blue-950 rounded-xl'/>
     </div>
     </div>
{/* paragraph */}
     <div className='flex flex-col gap-8 items-center justify-center text-slate-50 text-white'>
      <h1 className='font-bold text-4xl '>Upgrade with UpSkills</h1>
        <p className='flex flex-col items-center justify-center gap-1 text-xl font-normal'>
         <span>UpSkills is your one stop shop for upscaling. Get maximum value for time</span>
         <span>and resources you invest, with job ready courses & high technology</span>
         <span>available at the lowest cost.</span>
        </p>
        <button className='bg-red-500 rounded-lg p-2 font-normal text-xl '>Explore carear</button>
     </div>
 {/* detailed our course */}
 <div className='flex flex-wrap gap-8 pl-2 justify-center items-center'>
   <div className='bg-[#ffffff] w-[25rem] rounded-lg flex gap-3 p-4 shadow-lg shadow-white'>
      <img src='' className='w-25 h-25'/>
      <div className='flex flex-col gap-1'>
         <span className='text-3xl font-bold'>55%</span>
         <span className='text-xl font-normal'>Average Salary Hike</span>
      </div>
   </div>
    <div className='bg-[#ffffff] w-[25rem] rounded-lg flex gap-3 p-4 shadow-lg shadow-white'>
      <img src='' className='w-25 h-25'/>
      <div className='flex flex-col gap-1'>
         <span className='text-3xl font-bold'>600+</span>
         <span className='text-xl font-normal'>Different Course</span>
      </div>
   </div>  
    <div className='bg-[#ffffff] w-[25rem] rounded-lg flex gap-3 p-4 shadow-lg shadow-white'>
      <img src='' className='w-25 h-25'/>
      <div className='flex flex-col gap-1'>
         <span className='text-3xl font-bold'>1200+</span>
         <span className='text-xl font-normal'>Career Transitions</span>
      </div>
   </div>
    <div className='bg-[#ffffff] w-[25rem] rounded-lg flex gap-3 p-4 shadow-lg shadow-white'>
      <img src='' className='w-25 h-25'/>
      <div className='flex flex-col gap-1'>
         <span className='text-3xl font-bold'>400+</span>
         <span className='text-xl font-normal'>Hiring Placements</span>
      </div>
   </div>

 </div>
{/* Our courses */}
<div className='flex flex-col justify-center items-center gap-8'>
   <div className='flex flex-col text-white justify-center items-center gap-4'>
      <h1 className='text-2xl font-bold'>Our Courses</h1>
      <h2 className='text-xl'>Practice-Based Learning Tracks, <span className='text-red-500 text-xl'>Superchanged By A.I.</span></h2>
   </div>
<div className='flex flex-col items-center'>
   <CoursesSlide/>
</div>
</div>
 
<div className='w-[90%] rounded-xl h-32 shadow-green-500 shadow-lg bg-gradient-to-l from-green-700 to-green-100  flex flex-col justify-center items-center'>
   <div className=' text-black flex gap-1 flex-col justify-center items-center '>
   <h1 className='flex gap-1 text-3xl font-bold'><img src='' alt=''/>Prepleaf</h1>
   <span>by UpSkills</span>
   </div>
   <p className='text-xl font-sarif text-black '>If you are sturding in college, check courses offer by prepleaf. <Link className='text-red-500'>Click Here</Link></p>
</div>
     {/* our achievers works with */}
    <div className=' flex flex-col justify-center items-center gap-4'>
       <h1 className='text-2xl text-white'>Our Achievers Work With</h1>
       <Carousel className="rounded-xl w-[80%] h-[50vh] ">
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIUFBcUFBUYFxcXFxgbGxcbGxsaFxsXGhsdGxgaFxobJCwkGx0qIBsaJjgmKS4wMzMzGyQ5PjkyPSwyMzABCwsLEA4QHRISHjIpIikwNDIyMjI0MzIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAMABBgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAE8QAAIBAgQCBQYKBgcFCQEAAAECEQADBBIhMQVBBhMiUWEycYGRodEHFCNCUlOSscHSFTNigpOiFkNUo8Lh4kRjcvDxJGRzdIOys9PjF//EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAApEQACAgEEAQMEAgMAAAAAAAAAAQIRIQMSMVEVQZGhBBNSYQUiFCOx/9oADAMBAAIRAxEAPwCgopIpa/Xn5YSilooYOraFiFG5MamB6SaL1pkYq26mDRZuFGDLupkUX7pdi7bnU1M3+jWK/Y1XVFFUyc11RRQBRRS1QOLh2KM4jKpAOonWOW8aimqfXEuLbWxGVjJ01nTn+6KYqK/Urr0CK5rqiqQ5orquaAIpQvKiKVTBBHKhTvEWGttlbeAdDIg6ggimqfxWIa42donQaabU1UjdZDq8HNFdUVohzRXVFAc09Zw7OGKxCCTqJjwHPam6es4l0V1WIcQdOUEad25qO6wVVeSPRRXVaIc11RRVAClopaFsSKIpaWK5gSkiuopKEEiloooBIopaSKAKKULSRQBRS0VSCUUsUkUAUUURQoUlLFFAJRS0UAlFLRQCUtFAFUBRRRFCCUUtFCiUUtFUCUtFEUAtFKBRQUEVMx+JFwoQCMqZdTJOpO/pqNFFc6TdmraVHNFLFEVTJyaKU0RQHNFdUUBK4biRbYsQTKkaHvI37xUMCuqKJK7I5OqEopaKpkSkrqKIoDmiliihol4nFB7dtADKTJJncAaeqodLQakUlhFbvLOYoilorRBIoilooAFScBiBbuByCYnYwdRFR4oqNWqYTadnV1szMRzYn1ma4paKoOTS0GigEpaSKWqUSKmtiQbItwZD5pnT523dv7KiUoqNJ8hNoBRXQoqgWiuPjuF+ncPmCfmrk8Rwv++9Vv8APXg/z9Hv4Pb/AIWr18jtJTQ4jhTt1vqtfnqZgsVhjct6Xe04Azi3lmfnAPtUf1+kvX4C+h1X6fIzkMZoOWYmNJ3idprmtX8aw3cwOjEEW5nJrGuXNHPbeuUxOEBy5DGeNrfN7g7ttPVWPIw6Zvx8+zK0VbcbxWGW2rZXAZxBXLt1adw23qlHEsL9G6fSPy1tfyGlXqc39BqX6DlFNDiuG+rufaHupBxWxytv9v8A008hpfsvj9X9D9JTB4vY+qb7f+muTxa2RK2GI016wxrrE5d6nkdLp+w8dq9olUUlriljqXZrI6wMAq9aZIlZ5bQW5cqiDjKf2cR/4pP4U8jp9Mr/AI7U7RLoqG3Gbf1A/iH3Ug40s/qF/iE1PI6fTHjtTtE2kqG3Hk+oT+I1C8dT6hPtN76nktP8Wa8bqdomUVEHHByw6H95qkJxWVzDD24DBWJYwCTzp5OHTHjJ9o7ornivGba3CLaWCsDWXImNdj3+NQ/06fq7Hqf89PJw6Y8bPtE+iq1uPH6Fn7L/AJ6ROPN9Cz9h/wA9PJQ/Fk8dPtFnSVXNx1/oWfsN76b/AE/c+ha+wffU8nHpmvGy7RbKpJAAJJ0AGpPmFIRVpwPiJa0jFbIJuLEIARFxBLEmSYOkaAVYs7hC7CzKgnS2kQy5liZJ21J3M1nycb4Zrxj7MzNLWgTFBiABakOdktjsi5cA5a6RWNHG7nev8NB+FXykfxfuTxr7+CyroEVVNxx+ZH2E/LQnSC4OY+xb91Xya/H5Kv42X5fBb6UVUDj1065/5E/LRWfJr8fkvjn38FaGX6ber/OhnX6Ter/OtL1nBfoYn+T30hv8G+rxH93XybPp0ZrDYc3Ltu2hPbO7abanbwFdpiTqjTCk7emK0mExfDFuA2rWJN3tZP1cDskHQcoknzVxhsXwqGBsXiSQcxNst3kd28+iKMqM62Q829lIQn7XsrUjG8J/s90+m3+Wj9I8K/st312/y0sUZzGYx7ihWZiEHZHZAGg+iBOw1NdPgwrsst2WI9VX7cT4WP8AY3P71v8ALUm1xjh7y3xNySdSbgknx7NRhIy3xRe8+ulGEXx9daw8UwP9iP8AF/00fpbBf2H++b8tS2WkYvE2tVVd2YLqe/QffVtdsLZF23EhLuWecBVH4GrW9xnBBl/7ACZAWbrHWdN13mp6cUtIbr3MEvWZ2VwbhY6qCdYjTXUd9WwYZind7aOwOXtrVP0mww2wS/xblH9K7PLBJ/EuUyTBk2yRt7TUlsMgI0mURt/pKCfaa0X9L7f9kt/xH99P2el+YSMNa9LXD/io7KqMyuFQiMv306uET6J9taZulE/7Na9PWH/FXI6Un+zWPU5/xVm2Wh/gPHrVi0MNdwa37ZYvDRmBaJgMCNgO41Z/EeDXgyo9zBu5BKXAckjbyiQBr9IUvRzFYe8ty9iWw+HS2wAhQGYkT2Wdj6gDRxDpfw7DHNhcIbtxtBddSgMT5JYFiN9ABWG3ZtJFJx7oPcsWzeBtXbWnbQmYYgA5fORsTWa+I/7tvsmrfjPS3F4oFLrlEP8AVWwEXQyM0yx1jc1Bt8YuKAoZoGmqWyfWVk1pSdGaRDuYHQnqj9k1HuYRlyRbJlFJ7JmdjPjpVlf4/fAJzN9i3+Woa9JMT3t9lPy1bYpEc4e59UfsmnRZufVH7JqQOkmI729S+6lHSXFfSf1irbJSGEwrsVBtkSQNq1fEuGFCQqEo9m2RpMm2xmfH5QVnB0mxQjW7vE5o51bYriWJIs3Ldy7BIJBuZgSRmyMpnw7p17qjbwVJFdh3uWi3VjLOhIVSdPONNztTIwx5J91XX9KMYfngf+nb/LQOk2NO1z1Jb/LWzJRXcK+UwmseFcPhbgVCE3QSNNwT+FWmI6V40DS6Z/4E/LUJ+lOPIjrj9lPdVAz1F8/1Z5chRXf9JMd9e3qX3UUBV5fEe33Vd3uF2bYXrMRlLLmA6pmO8HyTpr6ajm0O4VFxyOYYsWjTUkwOUTyoZLDo5bCXOsJBBS4o0YdpkKDUiN2766w2BtoxN24iqwIBCOWJmOyGC6bmdaZ6PYfPcuAllyWrj6GO0oGX2mtt0F6D28Xa+M4osUYkKgJBeN2d94mRproday3TNLgw1zCSzdVLpMBiMpOmuhPfXP6Pu/R+7316jheI8B6wWEw7Fc2UXMjm3MxOctmiecUnTHopZw6dfaY20DBWQ57gGbRSsAtvpGu/KpvNbTy/9G3TyHs99ScDw+6AdF37633RToouL+Ve4TaUx2VZGdhuO2AQB3xVhi+L8Gw9xrK4VrvVtle4tvOqsN5d2liNZidjUchtRg8Bwe7cYrKrCkzvroADtG9M2sHcUg3FlRuEILeETpvXqfGOjFhrRvYQm02TNClsrpGYjKdQY2j1VQdFOALi2Ls7dVbInssjM24UZuUbms2ao8/xNpblxTbDqqlT2shJIOvMabeNWl65ce7cdCFW7LMCqsoI00JYE+gcq3fFeN8Nwdw2LeBF0oYdwtvKGicue4Zd+/76tMT0ZwWLsi9YtizcdJVguTXfLcQaHX09xq7iJHjePS3cbJbtPbcE5i5ER6BTR4Tc+kvt91b7o50eTF3SGdwtsDrAUyseQVWk75T6j4VYcX6S4DB3GsWMFbum2cruzIgDc1D3AxcjnVcybTzIcGuH56j/AJ81a/B9FrapALHMkEEKzg57eo5KxDHzTWuXhGD4lhuvw6Cy5zAREZxoVYKcrAkbjX7qhdBrnW32t3cz5bbQHRFgh0BjKxM6c6m60WkUB6L2gGYu0RmEEaDJmImNeevjTeP6MoiOVumRESAR+sK/dpXoXFcPhsPcfFYhlSwqIq2wJDOcwaVAliVygDz91P8ACuI4LiNu4qW5VTlZWTIwnUEd3nBqWDw7jL5rlu11OSIOdXkQdyYTnA08K9MXonhmwJxMFrpwjFWnKqsUJkIsBjPNpNVl3EJw7E3rZw3xryAM5tqFUAurAtmJMPlOg1WvQeC4wX8IlwWggdG+SkMqwSuWQII07udQp4ImDdQFZBLzD89+4aaVLXg3fc/l/wA60174QUdGUcNtKXUrIu25XMInS3y/CtV8HK27uGfOltmW6RJCvuqnePPpWtxKR5fiOCLl/WNr4CusF0bt3HCdY4mdQAdhNXHGHVMVfS4FAF65ky3EUxnMZlZdNIr0vof1dzBWyqjZlnRjoSPKA1NXdRaPHv6PWgSDcfQkbry05ipVno/Y36x/5D/hrWfBtfBxF224QsEIMNm1VhurKCDvzNanjC4TCXGxuIIAyoirlntjNJVRuxEeaD31NxKPK+IYNreW2gSLgYZuri5kALHUQCd40qTZ4FIQdZdbLAVRmlczgHQTsCxmr+5x2zxPHYdbQKAZ0YXBDlcrMSmUkRlncjWN61XSLE4zD2wmAw6sQpaSrFdNAqhd2OurHu79DeCo8+xPCkt5QXZZYL201g92k0lngFqBmLk8+1z9FegdG8Vi8SjW+IYULoCDlIUnuIJOo7wao+L4DqbrINRoy9+Vtp9Mj0UWcCjO3Oj2GnVSf3jUpejOGFsPk3MRJ8dZnwqZvNPW2MFZMA7cvVW6MtqyqHA8N9WPW3voq2Tn5/8ApRUKeaTXfKoai53D11aG3bFrOblsNDHIScxImBtEn8a6HOzro+IbEN3YZ/a9sVZ9F+jHEcUgew4tWjINxyxHceqUanWddB41V8JZgl/NlBuWsq9pYnOGOYk6CFJ9Fe1YeyLvDlt4ZwhawqIwOinIBEjbzjvmuU6eDcMZMG/Q3CWGVL3FApUgC2oAOh2Izkkz3itb8Jxjh7iSJuWhpofLHurJcD6B37d5b2Ne0lm0ykANmLsD2VA2UFo0kk7RrWq+FOfiBHfdt845k8/NWUslZP6Bgfo/D5eaMZ/aLtM+mvBTbui5dR83ZYghj89SQ2h5zNep/Bv0mtLa+KXXVGQkqSwjKx0k7DUwPEeImy6UdBkxLm/YYW7jasCCUc/S01U+IBnu51aVtMmaweVL0lxqEWvjV1VUBcoeAFy6AeEV6/8ABiFGBXL9Zcnz5vdlrz658FmLJZnNoASxIuOdAJ0GWrb4O+kSYVTYvSqN21cgwJ8qdNhBnz9wqbaTF5Md0sw9y3jbsqZTEu5k+VLm4D5iCPQarsdxvF275ti7etLIhVuuiiQCYUGBJafTXt3STothuIqLqXAtyAFupDqy8gwB7XnBBrFYj4K8Q75mu2CBmktnOhMyVgffSo0W2XnwQsOrxGpLG4hJJkmVOpJ31n11B6QdP8ZhsTdsGzh/k3IUtmzFDqjHtc1INMdEMamCu3FRbjWi+R2ygLmU5SbYBkgyp9AHOtN0j6MYTiyLetXFFwLC3Vh1I+jcWQdDPcRr5qrqyLgxT/CrjVIAtWNRMiY3I1+UEbVJ+DO/m4g7kANdt3XYCcuZnVzE8pJqL/8AyXGFoOIsqv0gGOnmK/jTnwd4d7XEFzTlC3UzFco0Gmu2uXvpFWmG6aLL4YMS/WYe2Jy5bjx3tIWfQPvrr4IWYXL6nZraMBPcxU/hXfwrWy9zDMhXyboPPmhGxqP8G1q5ZxVw3RkRrJAZlKDMGUxLHU71dn9dxN2aKj4VcJPEJEa2bZPj5S/hXofwbXM3D7X7LXV+zcYVjvhOdGxNspFxnsqqlGBhg7xIG+40mrn4O+KW7GHFjEN1Tm7cK5wUVsxmFLaE6jnrJ7jSVbUyq7Z5fewuW46mIV2EeYkfhXpXwPYgFMSm0PbaPOtSOKdCcI957wxK21uMXKHKQGYyxVsw0JM67Vn+gHEUwl68zK/VMEzPIdU3mcup1yx4A7mktu20Fd5K7p3hQOJXpUasjfaRT769C+DCyyYBAwIBu3SoP0M5Ajw0NPcW4fwrFMMTduWmhR2hdCqyiSM0HXc01wfpjgne7bW7atWbS21QsypmPbD5QY7IhQPXzFRtNILBl+jKi1xq4mwLYhfP2pX2NT/wzW2IwseT8qI5Zvk4PqmoV3FWRxj4yl621oOHZg6FAptqHJO+hFSvhO4zg8RYtdViLbMlyYRlLZSpB38QK1StEvBl+gF5bWOsA+UwueoLmb+UGvRfhJuYy3aS/hbz21tki4ECnRoysQQdAZE/tV5lg8JdtgXLdy11gIK57loacz2T4DQnYmvReCdNLYt9Xi8oCp2rislxAuoy3ApJOg3AMjeKmpW79FhwYS10t4hlUnGXTKgnsJIbWRsPDXx8Kj4zi2IuP1ly69xgIR2ADBZkDs6cz6zW5v8AB+B3Wz28VbtgkEoly3l3mArglfMIqs4vwfAs9tcNdNwKGzlWXypGXXLG2bb3VvTcUzMk2jnhmK6y0GPlA5W845+oipnWhXEnyh90/wCVQ7HCVQZVdwCZIzDf0Cnm4SjRme4YmO2eevLzVt5IOYXEKLrqTHZTfvEz94oqPd4NaBzFrhJ3PWPvp4+HsorJozPDuHObYZWtqDrHVgnXxkU4/D706XUG39WO7z1P4ZcRLKKzAELqOYNOXcVaB1da+nD7aSt/J82e9t1/wq72EurbuXTdBNpQVi2qascu48GO9U/FuNYnDXE6nE3ASokqWtyDqsgHtCI1M1puI3kfCX8jA/qwY8ST+FZninV3ESE1CpJIA7QGsEaxM18/XUXNqPGD2aTkoJy5Lm8Ltxke5ibt1kZWUXGLKGGoIWYBnmNab4hauXXHWYm6QzA5c5yzlOwZjFNcPsYLIrXQmcyTPaMyY180VJupw4EGLcwvzfAV6tulj+q9zz3qfk/Y5uYd8mQYm4FggqWQgqeUMD4+uqvhuLv28Q2HtYm+iKsjJcZRsDoFOX53dVr1vDu639kVV4N7CYp7k2xbIYLlImNI0HmrM46TapLnJqEtSnbfGCzxVu5cGW5iMRcHc11mHqOlJb4fctrFu7fQGJi5IO+4NPfpbC/SFdPxixp2idO6uu36fpHLdrdsg4bh3VyyXLqk6nK5WT45QKp8Fjjed1xNxyvzc7sBOx8o71o24vYPef3ai4mzZsYjtKWU2kbUZyXcKxPrzeuuGrHS3R2pVmztpPU2y3N/odw12zattbt3TbDkEsLpDiCpgEHbsjTxPfUG02GQ51vsrsFJIulWJIB1IINWI4nh/q2/hn3V1c4lZ0+SfZf6s9w8K6/6b4Xsc/8AZXL9yr4nj1NtoxFy4dOybztoTB0JpWwSLZDZXysqlgLjkbTJWYIB7hpScWKXwoS2y5STrbbnHcPCpuFxAW2ttrbNCBT2TB0jYisx+1udpVXWDUvubVTd32R7PCrDCVUHxzsfaDT+K4ehAz5iO43LhE98Zv8AmaW1dVTK2SDEEhSJHq1p/wCOnT5J9u4958K7qX01ZS9jzOP1Po37lFxXDW7eUoltZB1MkysczJ501xa4mdBbEyBv1kZge478vCrHjSG6F7DrlnXLO/qpcRZa8blwSnU2kaCNTLxp3V5Nf7bvbVYrB7ND7irdzm8i3cZYutmuW+2VQfq7hGg8Z81d3FwgAPVKoHMW3XeB2j3CPbT6424drL+fT30/fLXLeRrbQwI3Gmp5TXbfpJYr2OVajfr7me4fkz4gNbBCMYGp0BYaeqrDCJauF4tIpVoMCRrOxjwNSLWW07XDbJLxIMAGO8qZptb+W51qqqydVWQCO7UmuUNSEZJVjN4R0npylFu84rkkPw+3E5E5fNE0xjMIi2zIVZUheyJnw51Yvi7zDs2wPE7+gGuEzjXqwWIILM0t/kPAV6J6+k8RXweeOjNZbKbg2Ga4cissKpDMUBzBjsAw8DqQatbT/FFNpEXLdJDEgDQK3azHYbb6V3gbLWgcqSWiZM6DbaO+paZbjTcXLCMII0MkTv4CuClCUGmsvFnocZqaknhehm+B4aRcK9oFzlJEnQxHm5+mtLas4oACH9A/EVNXBKMW4EBWVXA85I09S1fqBXTTnGOmkkSWnJzbbIfB1vQRcB5ZZiec+PdvVkBtQsd9AeTA9fKucmm7OiVKhvFIDHpoqNiL4VgSdcoHcNzMCiuTWTomUN7oyFPk22GYCFXt6gnyWA7jzpx+jFo9ppUTubM+0GOVak5jpB5f1dzlm37UxqK4xGFz7q3lAyLdwbXM06Hurz72a2oxvFeHW7WGdLbBhcu2tlC8mOwPcZnuo4Vwa3cVsxcFWYaKCuplYOYTofNVv0nsXLaWYUnPdtJqCjS65ZgQW282sVCXhVzrnttaZyEtuJtqTDZlmI77e9E2GkRGwGDV0XrJU7nIundEHXWrS7wDDhh8pplB0UZtIFVNjB3OthO0QT8mbaMYG41ESPNVn+j75zRaueUN0tabEiSs+rQVZbuyKhG4RhB8+4f3RUZ+GYUHR7v2J7/CrJeHYj+zH0rZ/JR+jMRm/UAGAY+R5k/s+FTdLsUij+JW1fKSzLEzlZD/AO1qlDC4QwCLw030y+k5dPPWgwWBvISWtaFSNOq8N9tKivwW6SOxl1+sUax7PRTcxSMziLdhWi3dD88vlNA7ygIHpipDvYuXy75snVWkBBiHVSGBkeFXVzo+7kZkUxsesUEeYjUVS2OF3FvXUZlbsdZIbKwnSA0y0eo1XJtlSVMl4YYPMQTO0KLilhO+YRXeItWQ3ZIZRGmYa+mab4Jwu6zN1bMYjMGuMoMzGxFT04LdzAloOunW3Pbr/wAxUbaYVDaLhfq2P74/NTTJYPk23G+oZTz8TVh+iH53B/EuGmV4VqRI3Pz7nfS2MFdaCiZtZtdJMGPOG/Cu3u2yI+LsCOYaT7Wq6xPD0ZEXms825xznwqEeDJMwvralsUiqLIASUaNoZGY68/kzUG1jUdcTFvL1ihByyjsAZgxkDNr6av34GvcnqNU2F4MLltpOQlrplQA3yefKJI2lBVeUFyTsDjbYQI1jMQACVDMdt4HjUlcchGllYAB7WYET36GNqicDwjXLYyKGZll2cdkEb9oyWPgPZU7DcDCsQ7KxmdEAWdtF981C4GGxNy4p6vDWyAJzkMUjzZZP3eNcPw64hPyILAjtAnLmMGFASOfnrQ4HD27avLDzZdPJInTnUsPa3zc1+adII27hpTJMGZJxA/qk9Kjz/RFQsTfuZirWrYI7mCkecVtLYRhlBkkR5M/Ng1V4/CqbjnvY8h31U2R0UWFxtxfm2iI5mT7KrDx57ri2luWYkSwUCBMxHm7qu+JBFRgD2hsIrMPZyYi0yjmNB5iB94rrprKszJusF7hXxTXQ/YBCi3BBIOmYmd57J0qTjeJ4q3cFuEM7EDsjumfuzTUm9bUHD3Igm6wfXmVcD719VWWIwIuZP2WDedRuPurelHNN4Q1G6tcnCWsTzuWvN1bR/wDJrTot35/WW+f9Wf8A7KlWRIHmFSiwyhdZmfDn7xW+CclLdwt0mTcX0W/9XnoqyYQaKtsxQ8AY50AE1lrPTssyqqXJJA2XmY+nTD9PX5I3q/8A0rw7JdHa12WfSdJuYVf+8WT6n/zqfxLC3BcW5bbI3VwQylgwLSAYgiIO3edKy3FuOtct2MSQZW6SBGvYKxpn7yfnCmMT06cyGQkERs2wk/WeNFGRW0WHBcYLeKD3YQduW1Ik+ia1z4hGVnVgylwZUyD2V5ivJk4y7GSkqZ5dr76kXOKTM2pJC6zB8kdwiujg2zCkkeh47ii2kztm3gDmT3CaxicRuC4XDsJM7k6Ekwe+qpuIuQVa3Pc2Yhh61I9lQXxd3MQI5d22sfNrUYUSUrPXbCC4A6HMpGhG1PNh2nbn+FeX8O49ibQKjUEzGmh9KGp79JsVpCcgfm+P7Fcnpys0pxo9E+Kv3VkOJ22+NPDFSLHhBh4gz+FU/wDSPGHZP5Qf8FL0hxtxGtOFBa5h1zAjvOY+bWii01ZrcmnTLjo/xRbFxjcB7QABUSJ13G/qmrh+I2i0i4u50JAI84Oo9NebPiMR5WjD97Tx0IrlsZiMo7KHNJ2edyNw010cLdmFJL1PULTl9Vg+Yj30yyvmOnM8x7684scSxiCFj+cH2MKROP4pp7ca99z89Z+27Lviel9ru9o99NsH8PtL7685/TeL+sb7Vz89ctxjGH+saBHNuc/teFNjG+J6UAx3K/bX31XYbCIl1YhS7OCFaVYnMCSBpPOawlnieNuMUR2YjYDUxz3NWPBsViUxdoXmIHWAkNlGhmDPLWptdMqatFn0dvIkqyuJLdpLhU6EjUSAdqtHxWpK3W1iOsWfRIANY6+WS9cg9nM2yq43O0g+FSMal5UlwQsAAlbe+421761tsN5NpZe6wkdWwPczA+oj8abt3joGVl8YJHrWa87+PXRpnMf8Kn16UlvHXDMsRBjYU2sYo9Mt3UOguJPdJn1RXOJbKCcykgbCZOnmrzc4lju7GurWMObLncCDsTuBPfU20Z5NHexGeZYTHhUa9agqw5EHXaQQdaphjh5RzmOZk+vWtLdvWMmrwe8jIs9wzwTW06ZauNE3E3z8XDGM1q+hMTG6tz12q+R28PUayeKx63LF1Eks+XL2WILHQAGI3NXFnj9sICyvOgPZIEx9I6V1VJtX6/8ATFtxToubLt4aE8j3/wDSpCOTz9hqmscZV5K27hG+gkbDnNSrXEf91d+yv5q6OBhSzgl3M/I/y/50VHOMY7Wbv93+eiptLuMLgMOJD5SYM6ActeY02rvHWhcgJatKoMnLoxG2k1U2ekOHRVYOJkjIc5IHfIUD0TTD9JUMeTpGvbBryqSbbs1tklwXjhDlssRlXtIDoczntRAObRecDfXSob8QRC9u3ZtECZZ7cuSTGhzaRyqPjekOGNqwyspuq10uMrTB0WWjXSqq3xW0S7M4BaToG3Jnuqw25tmpbqwjcJhU6q1mJAJSZIURHMxpTzWbQR8jEqCY7UiNNiN6oMfx/CNaRFugkRIh+Q81SMN0iwItlWuie7K5+5aNqsM41Lr4L7Jbnyjy5tWU40UTEPEnsp3z471ZWulOCzGb2h/Yf8tZ3jHFsPcvl1eVIGsMNh5qkWr5KlLo04QQCVZhA+cwPqLQaeS5bBEFgQBoS+noJ1+6qw8fwQURdWdOTn8KH6R4IrlN0H9xzp9mlr1M1LpljcRncHrXIE9nZdf+DKeXOarOIYiLmW4rRICBhmlVADQ7jbNm2B5jlRY49gxqL/oZXI+6RUXpV0gw93qDauAslshoDaHMT84a1MWjrBSpl67oMKWLkE6BJAEErICQNNT7dufNhLZtocg5awPpa1hrnG3MA3JA20A/Cnx0icIqi6RBOkctI5eeq69GTbJ8m5SympFvn9EVhvjAUuCD5R9GtJ/SC4Z+XYevX1CoKYq3Ms28k6Heqq7QUZIsBih9Gn/jAyt2eQPomPvIqrvYuxAynWfHapFniFnKQWHkgag/SB7vCra7RafTBcWynMpI8xg1O4VjG61XILTcQdokjUgAGeWtUtvGW51PsPuqXh+IWVac2mZW2PIg6aeFT+tcmv7XwazjHyd82gAMiAeXmg9wGo09J2qme5BaSsw5iWkx6PCad6Qcbw1zEtct3AymDMMNY13FVWK4hZLqwcbEHQ9x8PGoqq7K7vgkmRE86aW0czQecxTd/iVoqIcSPBu7zUxaxtsklnjXuPurVq+TKWOCxa0w3++nbFhc6mNdt/CKgHiFj6fsPupbfELII7cajk3uqNrs0om34XhMP+j7xOTrCG8ojN2YYBZ118N6YREuYV2uRKpK6wc0HYc9h6/HTNYXG4Mq5e8VYRkUIxDTuSY7IA+8VOw/GsILQQ3QDlOmV98xjl3RUTjfJNrJ+AwD3LKi0QjBCzbwxtjNBA3MqPVV9wT5SwpIEkawI1H3bVQ8A6TYK0FV7sDM4PZcwrTroNtad4H0pwNpGR7wEXHK9i4ZUtI2WvTvhvu1wvc5KEttZ5fsanCWWSZ7/ZUy29ZwdNeHfX/3dz8tdDpnw4a9f/Jc/LXaWpGWW0ZjpyiqSNRbNFZkdN+HfXfyP7qWue6PaN1Lo8Ur0roH0JwuKs28ReNxu22a2exbdA2SEYEOxBZWLr2R5O815rWh4Z0x4hh7S2bN7JbScq9XbYgFs5GZlLRm1ie+vmnrNxhvgwwrLbY374zhFIKIri4zIslCZRT1inI3aAGu+lRxToPhksdfbu3SGwlzEqGCg9kYUqrR/wCZaY+iKp26f8UMf9o2YN+qs+UCrAnsamVU67xruaes9OL3xO7hLim4Xt9Wrkoq27WW0oUKtvMTFpROeDoSCRJAx9FFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFATcJbsFflHdWnSBIy95qScPhQR8o7LlkkLEMcsDnyzekRPOn7XSnGKFVbiwqqo7CHRdtSupI0J5jekTpRi1BAZACzt+rt+U85j5O5k+ugIllMNpna5OkkARtJ3E6bRz7wNaaxq2Bl6pnbfNmAHdER6asm6U4olWzLmUsc2VZOYqYOmwyiB4sNiRUHiXF72IydawbICFhVWJifJA7hQFfRRRQH//Z"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxB0eOGs-YVUyqfDb7nC1nzRCdBlKlx243w&usqp=CAU"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="data:image/jpeg;base64,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"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>
    
{/* Success Stories */}
    <div>
     <div className='flex flex-col items-center justify-center gap-5'>
      <h1 className='text-4xl font-semibold text-[#b3b2b8]'>Success Stories</h1>
      <Carousel className="rounded-xl w-[85%] h-[80vh]">
      <img
        src="https://img.freepik.com/free-photo/handsome-indian-man-with-laptop-while-sitting-near-fountain-city-center-day_231208-2779.jpg?size=626&ext=jpg&ga=GA1.1.1218979706.1701662461&semt=ais"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://static6.depositphotos.com/1008303/626/i/450/depositphotos_6264776-stock-photo-asian-student-on-campus.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/young-indian-man-standing-outdoor-with-laptop-front_231208-2774.jpg?size=626&ext=jpg&ga=GA1.1.1218979706.1701662461&semt=ais"
        alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src="https://img.freepik.com/free-photo/thoughtful-woman-making-notes-sitting-bench-outdoors_1262-19084.jpg?size=626&ext=jpg&ga=GA1.1.1218979706.1701662461&semt=ais"
        alt="image 5"
        className="h-full w-full object-cover"
      />
    </Carousel>
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
