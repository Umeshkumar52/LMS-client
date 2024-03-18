import React, { useEffect, useState } from 'react'
import 'chart.js/auto';
import { Navigate, useNavigate } from 'react-router-dom';
import { Chart } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { allpayments} from '../../Reducer/Slices/paymentSliceReducer';
import { deletCourse } from '../../Reducer/Slices/CourseSliceReducer';
import { ToastContainer, toast } from 'react-toastify';
import { FaBeer,FaUsers } from "react-icons/fa";
import {FcSalesPerformance} from 'react-icons/fc'
import { FcDeleteDatabase } from 'react-icons/fc';
import { elements } from 'chart.js/auto';
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import { FcMoneyTransfer } from "react-icons/fc";
export default function AdminDashboard() {
    const dispatch=useDispatch()
    const [paymentData,setPaymentData]=useState([])
    const [courseId,setCourseId]=useState('')
    const {courseList}=useSelector((state)=>state.course)
    const navigate=useNavigate()
    // const data=useSelector((state)=>{return state})
    // async function payouts(){
    //   const response=await dispatch(allpayments())
    //     setPaymentData(response.payload.response.items)
    //  return response
    // }
    // let pay=0;
    // paymentData.map(Element=>{
    //   return pay +=Element.amount
    // })
    const userData={
      labels:["Register Users","Enrolled Users"],
      datasets:[{
          label:"User Details",
          data:[800,200],
          backgroundColor:["yellow","green"],
          borderWidth:1,
          borderColor:["yellow","green"]
      }]
    }
const saleData = {
  labels: ["jan","feb","mar","April","May","June","July","Aug","sep","oct","nov","dec"],
  datasets: [{
    label: 'sales/Months',
    data: [2510,136226,45121,2121,0,65631,0,65656,0,45465,0,65659],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 2
  }]
};
   
    async function delet(event){
         if(window.confirm("Are you want to delete course")){
        const response=await dispatch(deletCourse(courseId))
         }
      }
  return (
    <div className='overflow-x-hidden w-full flex flex-col gap-12 px-4 justify-center items-center'>
     <div className='flex flex-col mt-4'>
      <h1 className='text-3xl text-yellow-500 font-bold'>Admin Dashboard</h1>
      <hr className='w-[10rem] bg-white h-1'/>      
     </div>
     <div className='w-full flex flex-col lg:flex-row gap-10 mx-10 justify-around items-center '>
      <div className='flex justify-center items-center'>
      <Chart type='pie' data={userData} />
      </div>
     <div className='w-max-fit-content' >
     <Chart type='bar'  data={saleData} />
     </div>
     </div>
     <div className='w-full flex flex-col lg:flex-row gap-4 justify-around items-center'>
     <div className='flex gap-4'>
     <div className='flex flex-col items-center justify-center'>
      <h4 className='text-red-500 text-lg font-bold'>Users Count</h4>
      <h1 className='text-3xl text-white font-semibold'>831</h1>
      </div>
      <FaUsers  className='text-yellow-500 w-12 h-12'/>
     </div>
    <div className='flex gap-10'>
     <div className='flex gap-4 '>
      <FcSalesPerformance/>
      <h1 className='text-white '>performance</h1>
     </div>
     <div className='flex gap-2'>
    <h2 className='text-hite font-semibold'>Total Revenue</h2>
     <FcMoneyTransfer/>
     </div>
     </div>
     </div>
     {/* Course Overview */}

     <div className='w-full mb-20 flex flex-col items-center justify-center gap-6 px-4'>
    <div className='flex flex-col items-center'>
     <h1 className='text-3xl font-semibold text-white'>Courses Overview</h1>
     <hr className='bg-red-500 h-1 w-[20rem]'/>
     </div>
     <table>
     <thead>
     <tr>
         <th>S/No.</th>
         <th>Course Name</th>
         <th>Instructor </th>    
         <th>Total Lectures</th>
         <th>Description </th>
         <th>Actions </th>
      </tr>
     </thead>
         {
          courseList.map((Element,index)=>{return <tbody className=''>
          <tr className='px-4'><td>{index}</td>
           <td className='px-4'>{Element.tittle }</td>
           <td className='px-4'>{Element.createBy }</td>
           <td className='px-4'>{ Element.lectures.length}</td>
           <td className='px-4'><input type='textarea' className='text-decoration-none px-4 py-4' readOnly value={Element.description}/></td>
           <td className='flex gap-4'><MdDelete onClick={delet} onMouseEnter={()=>{setCourseId(Element._id)}} title='delete course'/><IoMdAddCircle  onClick={()=>navigate('/course/createLecture',{state:Element._id})} className='relative' title='Add lectuers'/><GrUpdate onClick={()=>navigate('/update',{state:Element})} title='update'/></td>
          </tr>
        </tbody>
         })
        } 
        
     </table>
     </div>
    </div>
  )
}
