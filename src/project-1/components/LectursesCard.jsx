import React from 'react'
export default function LectursesCard({serialNum,data,lecturesData}) {
  function urlSendHandler(){
    data(lecturesData.lecture.secure_url)
  }
  return (
<div className=''>
    <div onClick={urlSendHandler} className='w-full h-16 cursor-pointer text-black flex px-4 gap-2 border-t-2 border-slate-300 bg-purple-100'>
        <h1 className='font-bold flex mt-1'>{serialNum+1+"."}</h1>
        <div>
        <h2 className='font-semibold text-lg'>{lecturesData.tittle}</h2>
        <h4 className='text-small'>{lecturesData.description}</h4>
      </div> 
    </div>
</div>

  )
}
