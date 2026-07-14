import axios from 'axios'

const api = axios.create({
  baseURL: 'https://locahost:5000/api',
  withCredentials: true,
})

export default api;