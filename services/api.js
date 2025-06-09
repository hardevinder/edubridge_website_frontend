import axios from "axios";

// const API_BASE_URL = "http://localhost:5000/api"; // ✅ change to production URL later
const API_BASE_URL = "https://edubridgeerp.in/api";


// Create reusable axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// 🟠 Submit Request a Demo
export const submitDemoRequest = async (payload) => {
  return await api.post("/request-demo", payload);
};

// 🔵 Example: Auth (if needed later)
export const registerAdmin = (data) => {
  return api.post("/auth/register", data);
};

export default api;
