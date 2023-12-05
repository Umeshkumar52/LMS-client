import React from 'react'

export default function LectursesCard({lecturesData}) {
     const {lecture}=lecturesData
     console.log("lec",lecturesData);
  return (
    <div>
     <div className='flex flex-col gap-3  w-[30rem] h-[26rem] bg-slate-400 rounded-xl '>
       <video src={lecture.secure_url } controls className=' rounded-lg'/>
      <div className='flex flex-col ml-5 gap-4 font-bold text-white text-xl'> 
      <h2> <span className='text-xl text-black'>Tittle </span>:   {lecturesData.tittle}</h2>
       <p> <span className='text-xl text-black'>Description </span>:   {lecturesData.description}</p>
       </div>
     </div>
    </div>
  )
}
