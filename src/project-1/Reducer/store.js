import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../Reducer/Slices/authSliceReducer'
import CourseSlice from "./Slices/CourseSliceReducer";
import paymentSliceReducer from "./Slices/paymentSliceReducer";
const store=configureStore({
  reducer:{
    auth:authSlice,
    course:CourseSlice,
    payments:paymentSliceReducer
},
devTools:true
})
export default store;