import axios from "axios"
import TokenService from "./token";

const config = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false
}

export const api = axios.create(config)

api.interceptors.request.use(
  async (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error)
    TokenService.removeToken()
  }
);

