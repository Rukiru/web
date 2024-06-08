import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://your-backend-url.com/api',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;