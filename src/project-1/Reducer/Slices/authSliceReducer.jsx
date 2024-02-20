import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {toast} from 'react-toastify'
import axiosInstance from '../../Helpers/AxiosInstance'
import { json} from 'react-router-dom'
const initialState = {
    user:JSON.parse(localStorage.getItem("user")) || {},
    isLoggedIn:localStorage.getItem("isLoggedIn") || '',
    isAdmin:localStorage.getItem("isAdmin") || '',
    // userProfile:localStorage.getItem("userProfile") ||{}
};
export const Register=createAsyncThunk('/auth/register',async(data)=>{
    try {
        const response= axiosInstance.post("user/register",data)
        toast.promise(response,{
            loading:"Process...",
            success:"Registration Successfully"
        },
        {
            position:toast.POSITION.TOP_CENTER,
            autoClose:1500
        })
        return(await response).data;
    } catch (error) {
        toast.error(error.response.data.message,{
            position:toast.POSITION.TOP_CENTER,
            autoClose:1500
        })
    }
})

export const query=createAsyncThunk('/user/query',async(data)=>{
    try {
        const response=axiosInstance.post('/user/query',data)
        toast.promise(response,{
            loading:"Process...",
            success:"message sent",
            error:'failed to signup ,try again...'
        },
        {
            position:toast.POSITION.TOP_CENTER,
            autoClose:1500
        })
        return(await response).data
    } catch (error) {
        toast.error(error.response.data.message,{
            position:toast.POSITION.TOP_CENTER,
            autoClose:1500
        })
    }
})

export const login=createAsyncThunk('/auth/login',async(data)=>{
  try {
    const response= axiosInstance.post('user/login',data);
         toast.promise(response,{
            loading:'please waite...',
            success:"Login Successfully"
         },
        {
            position:toast.POSITION.TOP_CENTER,
            autoClose:1500, 
        })
        return (await response).data;
  } catch (error) {
    toast.error(error.response.data.message, {
        position:toast.POSITION.TOP_CENTER,
        autoClose:1500,
      
    })
  }
})
export const getProfile=createAsyncThunk('/auth/getProfile',async()=>{
    try {
        const response=axiosInstance.get(`/user/getProfile`)
        toast.promise(response,{
            loading:"Loading....",
            success:"Get Profile successfully",
            error:"Failed to fetch user details"
        }, {
            position:toast.POSITION.TOP_CENTER,
            autoClose:1500, 
        })
        return (await response).data;
    } catch (error) {
       toast.error(error.response.data.message) 
    }
})
export const logout=createAsyncThunk('/auth/logout',async()=>{
   try {
    const response= axiosInstance.get('user/logout')
    toast.promise(response,{
        loading:"Please Wait...",
        success:"Logout Successfully" ,
    },
    {
        position:toast.POSITION.TOP_CENTER,
        autoClose:2000
    })
    return (await response).data
   } catch (error) {
    toast.error(error.response.data)
   }
})
export const forgetPassword=createAsyncThunk('/auth/forgetPassword',async(data)=>{
   try {
    console.log(data);
    const response=axiosInstance.post('user/forgetPassword',data)
    toast.promise(response,{
      loading:"Loading...",
      message:"forget password",
      error:"Unable to reset password"

    })
    return (await response).data
} catch (error) {
    toast.error(error.response.data.message)
}
})
export const ResetPasswordUrl=createAsyncThunk('/auth/resetPasswordUrl',async(data)=>{
   try {
    console.log("data",data[0],data[1]);
    const response=axiosInstance.post(`/user/resetPassword/${data[0]}`,data[1])
    toast.promise(response,{
        loading:"Loading...",
        message:"Password reset successfully"
    })
    return (await response).data
} catch (error) {
    toast.error(error.response.data.message)
}
})

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
           .addCase(login.fulfilled,(state,action)=>{
           if(!action.payload) return;
           console.log( "action",action.payload);
           window.localStorage.setItem("isLoggedIn",true)
           window.localStorage.setItem("user",JSON.stringify(action.payload.user))
            state.user=action.payload.user
            state.isLoggedIn=true
           if(action.payload.user.role=='ADMIN'){
            window.localStorage.setItem("isAdmin",true)
            state.isAdmin=true
           }
           
         })
        .addCase(Register.fulfilled,(state,action)=>{
            if(!action.payload) return;
            console.log( "action",action.payload);
            window.localStorage.setItem("isLoggedIn",true)
            window.localStorage.setItem("user",JSON.stringify(action.payload.user))
             state.user=action.payload.user
             state.isLoggedIn=true
            if(action.payload.user.role=='ADMIN'){
             window.localStorage.setItem("isAdmin",true)
             state.isAdmin=true
            }
           
         })
        .addCase(logout.fulfilled,(state,action)=>{
             if(!action.payload) return;
            localStorage.clear()
            state.isAdmin=false
            state.isLoggedIn=false
            state.user={}
        })
        .addCase(getProfile.fulfilled, (state, action) => {
            console.log("actionPro",action.payload);
            if(!action.payload) return;
            // localStorage.setItem("userProfile", JSON.stringify(action.payload.user));
            state.userProfile= action.payload.user;
          
        });
    }
})
export const {}=authSlice.actions
export default authSlice.reducer