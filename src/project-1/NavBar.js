import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className=' mainDiv flex bg-gray-500 w-1/6 h-screen flex-col pl-6 font-bold'>
         <Link to='/'>Home </Link>
        <Link to='/About'>About </Link>
        <Link to='/Service'>Service </Link>
        <Link to='/Contact us'>Contact us </Link>
        
    </div>
  )
}
