import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
export const restAPI: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/albums'
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
