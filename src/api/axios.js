import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api', // ✅ Make sure this matches your backend port
  withCredentials: true,
});

export default instance;
