import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/AxiosInstance"
import { toast } from "react-toastify"
const initialState={
    subscription:"",
    razorpayKey:"",
    verifySubscription:"",
    isVerifySubscription:""
}
export const razorpayKey=createAsyncThunk('/payments/',async()=>{
   try {
    const response=axiosInstance.get('payments/')
    toast.promise(response,{
        loading:"Loading...",
        message:"Get razorpay key Successfully"
    })
    console.log( "resp",await response);
    return (await response).data
   } catch (error) {
    toast.error(error.response.data.message)
   }
})
export const Buysubscription=createAsyncThunk('/payments/subscription',async(id)=>{
    try {
        console.log("id",id);
        const response=axiosInstance.post(`/payments/${id}`,id)
        toast.promise(response,{
           loading:"Loading..." ,
           message:"Subscription successfully",
           error:"Unable to Buy Subscription"
        },{
            position:toast.POSITION.TOP_CENTER,
            autoClose:2000
        }) 
        return (await response).data
    } catch (error) {
        toast.error(error.response.data.message)
    }
})
export const verifySubscription=createAsyncThunk('/payments/verifyPayments',async(data)=>{
   try {
    console.log("verify called");
    console.log("data",data);
    const response=axiosInstance.post('/payments/',data)
    console.log("await Response",await response);
    toast.promise({
        loading:"loading...",
        message:"Payment verify successfully"
    })
   
    return (await response)
   } catch (error) {
    toast.error(error)
   }
})
export const allpayments=createAsyncThunk('payments/allpayments',async()=>{
try {
const response=axiosInstance.get('/payments/allPayouts')
toast.promise(response,{
    loading:"Loading...",
    message:"Fetch All payments Successfully",
})
return (await response).data
} catch (error) {
  toast.error(error.response.data.message)  
}})
const paymentsSlice=createSlice({
    name:"payments",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(Buysubscription.fulfilled,(state,action)=>{
            console.log("subscription actiopn",action.payload);
           if(action.payload){
            state.subscription=action.payload
           }
        })
        .addCase(razorpayKey.fulfilled,(state,action)=>{
            console.log("action",action,state);
            if(action.payload){
             state.razorpayKey=action.payload
            }
         })
        .addCase(verifySubscription.fulfilled,(state,action)=>{
            if(action.payload){
                console.log(action.payload);
             state.verifySubscription=action.payload
             state.isVerifySubscription=true
            }
         })
    }
})
export const {}=paymentsSlice.actions
export default paymentsSlice.reducer