import React from 'react'
import { Spinner } from '@material-tailwind/react'
export default function LoadingSpiner() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <Spinner color="green" className='h-12 w-12' />     
    </div>
  )
}
