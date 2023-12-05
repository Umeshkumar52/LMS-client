import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/AxiosInstance";
// import { error } from "autoprefixer/lib/utils";
import {toast} from "react-toastify"
import { error } from "autoprefixer/lib/utils";
const initialState={
    courseList:[]
}
export const allCourses=createAsyncThunk('/course/ExploreCourses',async()=>{  
    try {
        const response=axiosInstance.get('/courses')
        toast.promise(response,{
            loading:"Loading....",
            success:"get courses successfully",
            error:"Failed to fetch courses"
        }, {
            position:toast.POSITION.TOP_CENTER,
            
        })
        return (await response).data.message
    } catch (error) {
        toast.error(error.response.data.message, {
            position:toast.POSITION.TOP_CENTER,
            
        })
    }   
}) 
export const createCourse=createAsyncThunk('/course/createCourse',async(data)=>{
     try {
        const response= axiosInstance.post('/courses/',data)
        toast.promise(response,{
        loading:"please wait...",
        success:"Course added successfully",
        error:"failed to create course"
    }, {
        position:toast.POSITION.TOP_CENTER,
        autoClose:1500
    })
    console.log("response",await response);
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
        console.log("aixiosStance called");
        const response=axiosInstance.get(`courses/lectures/${id}`)
        toast.promise(response,{
            loading:"Loading...",
            message:"Fetch Lectures successfully"
        })
    } catch (error) {
        toast.error(error.response.data.message)
    }
}) 
export const updateCourse=createAsyncThunk('/courses/',async(data)=>{
   try {
    console.log("data",data.id);
    const response=axiosInstance.put(`courses/${data.id}`,data.updateData)
  toast.promise(response,{
    loading:"Updating Course...",
    success:"Course Update Successfully",
    error:'Fsiled to update course'
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
            console.log("addcase called");
            if(action.payload){
                state.course.lectures=[...action.payload]
            }
        })
    }
})
export const {}=courseSlice.actions;
export default courseSlice.reducer