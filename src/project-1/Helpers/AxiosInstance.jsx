import axios from 'axios'
const BASE_URL= "http://localhost:5005/api/v1";
const axiosInstance=axios.create({
    baseURL:BASE_URL,
    'withCredentials':true,
//    headers:{
//     'Content-type':'multipart/form-data',
//    }
})
export default axiosInstance;