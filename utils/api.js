import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // 🔁 Change this to your deployed backend URL if needed
});

api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
