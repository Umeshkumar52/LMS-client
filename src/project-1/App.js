import React from 'react'
import HomeLayout from './HomeLayout'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import ExploreCourses from './pages/ExploreCourses'
import ContactUs from './pages/ContactUs'
import PageNotFound from './PageNotFound'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CreateCourse from './pages/CreateCourse'
import CourseGreeting from './pages/CourseGreeting'
import Switch from 'react-switch'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CourseDescription from './pages/CourseDescription'
import AddLectures from './pages/AddLectures'
import Profile from './pages/Profile'
import UpdateCourse from './pages/UpdateCourse'
import Checkout from './pages/Payments/Checkout'
import LecturesData from './pages/LecturesData'
import CheckoutSuccess from './pages/Payments/CheckoutSuccess'
import CheckoutFail from './pages/Payments/CheckoutFail'
import ForgetPassword from './pages/ForgetPassword'
import PasswordResetSuccess from './pages/PasswordResetSuccess'
import ResetPasswordUrlHnadle from './pages/ResetPasswordUrlHnadle'
import UserDashboard from './pages/Dashboard/UserDashboard'
import AdminDashboard from './pages/Dashboard/AdminDashboard'
export default function app() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='About' element={<About/>}/>
         <Route path='Blogs' element={<Blogs/>}/>
         <Route path='ContactUs' element={<ContactUs/>}/>
         <Route path='ExploreCourses' element={<ExploreCourses/>}/>
         <Route path='Login' element={<Login/>}/>      
         <Route path='SignUp' element={<SignUp/>}/>
         <Route path='CreateCourse'element={<CreateCourse/>}/>
         <Route path='CreateCourse/CourseGreeting'element={<CourseGreeting/>}/>
         <Route path='ExploreCourses/description'element={<CourseDescription/>}/>
         <Route path='course/createLecture'element={<AddLectures/>}/>
         <Route path='Profile'element={<Profile/>}/>
         <Route path='update'element={<UpdateCourse/>}/>
         <Route path='checkout' element={<Checkout/>} />
         <Route path='lectures' element={<LecturesData/>}/>
         <Route path='Checkout/success' element={<CheckoutSuccess/>}/>
         <Route path='checkout/fail' element={<CheckoutFail/>}/>
         <Route path='forgetpassword' element={<ForgetPassword/>}/>
         <Route path='PasswordResetSuccess' element={<PasswordResetSuccess/>}/>
         <Route path='reset-password' element={<ResetPasswordUrlHnadle/>}/>
         <Route path='userdashboard' element={<UserDashboard/>}/>
         <Route path='admindashboard' element={<AdminDashboard/>}/>
         <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </BrowserRouter>
  )
}
