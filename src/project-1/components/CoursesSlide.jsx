import React from 'react'
import { Carousel } from '@material-tailwind/react'
import Home from '../pages/Home'
import HomeLayout from '../HomeLayout'
export default function CoursesSlide() {
    
  return (
    // <Home>

      <Carousel className=" rounded-xl w-[80%] h-[60vh] ">  
       <img
        src="https://img.freepik.com/free-vector/gradient-car-rental-youtube-thumbnail_23-2149228176.jpg?size=626&ext=jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
       <img
        src="https://img.freepik.com/free-psd/flat-design-education-concept-youtube-cover_23-2150248414.jpg?size=626&ext=jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
       <img
        src="https://img.freepik.com/free-psd/horizontal-banner-template-creative-business-solutions_23-2149072632.jpg?size=626&ext=jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  
    // </Home>
  )
}
