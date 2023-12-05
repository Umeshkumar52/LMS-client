import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
export default function AdminDashboard() {
    const dispatch=useDispatch()
    const data=useSelector((state)=>{return state})
    useEffect(()=>{

    },[])
  return (
    <div>
      Admin UserDashboard
    </div>
  )
}
