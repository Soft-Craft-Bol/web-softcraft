import axios from 'axios';
import { data } from 'framer-motion/client';
//const baseURL = "http://localhost:3000";
const baseURL = "https://softcraft-portfolio.vercel.app";

const api = axios.create({
  baseURL: baseURL,
  responseType: 'json',
  withCredentials: true, 
  timeout: 100000,
});
api.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;

export const sendMessage = (data) => api.post('/api/email/messages', data)