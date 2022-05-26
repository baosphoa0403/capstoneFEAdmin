import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
export const restAPI: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});

restAPI.interceptors.request.use((value: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token) {
    if (!value) {
      value = {};
    }
    if (!value.headers) {
      value.headers = {};
    }
    value.headers['Authorization'] = `Bearer ${token}`;
  }
});
