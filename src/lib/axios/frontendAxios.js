import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      const user = localStorage.getItem('user') 
      config.headers.user = `${user.role}` || null
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
