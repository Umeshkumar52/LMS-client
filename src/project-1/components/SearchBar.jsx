import React from 'react'
import { FcSearch } from "react-icons/fc";
import useDebounce from '../pages/Hooks/useSebounce';
export default function SearchBar({updateSearchTerm}) {
  const debounceCallBack=useDebounce((event)=>updateSearchTerm(event.target.value))
  return (
    <div className='w-full flex justify-center items-center'>
     <input onChange={debounceCallBack} placeholder='Search...' className='relative rounded-sm w-full flex items-center h-6 py-4 px-4 text-black bg-white border-2 border-white'/>
     <FcSearch className='relative right-14 cursor-pointer w-10 h-10'/>
    </div>
  )
}
