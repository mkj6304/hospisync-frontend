import axios from 'axios';

export default axios.create({
  baseURL: 'https://hospisync-backend.onrender.com/api',
});
