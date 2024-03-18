import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/AxiosInstance";
import {toast} from "react-toastify"
import { error } from "autoprefixer/lib/utils";
const initialState={
    courseList:[]
}
export const allCourses=createAsyncThunk('/course/ExploreCourses',async(data)=>{  
    try {
        const response=axiosInstance.get('/courses',data)
        // toast.promise(response,{
        //     loading:"Loading....",
        //     success:"get courses successfully"
        // }, {
        //     position:toast.POSITION.TOP_CENTER,
        //     autoClose:1500
        // })
        return (await response).data.message
    } catch (error) {
        toast.error(error.response.data.message, {
            position:toast.POSITION.TOP_CENTER,
            
        })
    }   
}) 
export const courseByName=createAsyncThunk('/courses',async(data)=>{
    try {
        const response=axiosInstance.get(`/courses/byName/${data}`)
          toast.promise(response,{
            loading:"Loading....",
            success:"get courses successfully"
        }, {
            position:toast.POSITION.TOP_CENTER,
            autoClose:1500
        })
        return (await response).data.message
    } catch (error) {
        toast.error(error.response.data.message, {
            position:toast.POSITION.TOP_CENTER,
            
        })
    }
})
export const enrollCourse=createAsyncThunk('/checkout',async(data)=>{
    try {
        const response=axiosInstance.post(`/courses/enrollCourse/${data[0]}`,data[1])
        return(await response).data
    } catch (error) {
        toast.error(error.response.data.message,{
            position:toast.POSITION.TOP_CENTER,
            autoClose:1500
        })
    }
 })
 export const checkEnrollCourseForUser=createAsyncThunk('/course/ExploreCourses',async(data)=>{
    try {
       const response=axiosInstance.get(`/courses/checkEnrollCourseForUser/${data}`)
       return(await response).data
    } catch (error) {
        toast.error(error.response.data.message,{
            position:toast.POSITION.TOP_CENTER,
            autoClose:1500
        })
    }
 })
export const createCourse=createAsyncThunk('/course/createCourse',async(data)=>{
     try {
        const response= axiosInstance.post('/courses/',data)
        toast.promise(response,{
        loading:"please wait...",
        success:"Course added successfully"
    }, {
        position:toast.POSITION.TOP_CENTER,
        autoClose:1500
    })
         return(await response).data
     } catch (error) {
        toast.error(error.response.data.message)
     }

}) 
export const addLecture=createAsyncThunk('/course/createLecture',async(lecture)=>{
   try {
    const response= axiosInstance.post(`/courses/${lecture.id}`,lecture.data)
     toast.promise(response,{
        loading:"Adding Lecture please wait...",
        success:"Lecture Added Successfully",
        error:"Failed to add Lecture"
    }, {
        position:toast.POSITION.TOP_CENTER,
        autoClose:1500
    })
    return (await response).data
   } catch (error) {
    toast.error(error.response.data.message)
   }

}) 
export const getLectures=createAsyncThunk('/lectures/',async(id)=>{
    try {
        const response=axiosInstance.get(`courses/lectures/${id}`)
        toast.promise(response,{
            loading:"Loading...",
            message:"Fetch Lectures successfully"
        })
    } catch (error) {
        toast.error(error.response.data.message)
    }
}) 
export const updateCourse=createAsyncThunk('/course/update',async(data)=>{
   try {
    
    const response=axiosInstance.put(`/courses/${data._id}`,data.formData)
    toast.promise(response,{
    loading:"Updating Course...",
    success:"Course Update Successfully"
  })
  return (await response).data
} catch (error) {
    toast.error(error.response.data.message)
}
})  
export const deletCourse=createAsyncThunk('/course/deletLecture',async(id)=>{
   try {
    const response= axiosInstance.delete(`courses/${id}`)
     toast.promise(response,{
        loading:"please wait...",
        success:'Course deleted successfully',
        error:"Failed to delet course"
    })
    return (await response).data
   } catch (error) {
    toast.error(error.response.data.message);
   }
})   
export const userEnrollCourses=createAsyncThunk("/myCourses",async(data)=>{
   try {
    const response=axiosInstance.post('/courses/userCourses',data)
    toast.promise(response,{
        loading:"Updating Course...",
        success:"Get courses Successfully"
      })
      return (await response).data
    } catch (error) {
        toast.error(error.response.data.message);
    }
})
const courseSlice=createSlice({
    name:"course",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(allCourses.fulfilled,(state,action)=>{
           if(action.payload){
          state.courseList=[...action.payload]
           } 
        })
        .addCase(getLectures.fulfilled,(state,action)=>{
            if(action.payload){
                state.course.lectures=[...action.payload]
            }
        })
    //     .addCase(userEnrollCourses.fulfilled,(state,action)=>{
    //         console.log("action",action);
    //         if(action.payload){
    //             state.enrollCourses=[...action.payload.message]
    //         }
    //     } )
    }
})
export const {}=courseSlice.actions;
export default courseSlice.reducer