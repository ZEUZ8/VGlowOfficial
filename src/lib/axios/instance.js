import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    timeout:10000,
    headers:{
        "Content-Type": "application/json",
    },
    validateStatus:(status)=>{
        return status < 500
    }
})

export default axiosInstance