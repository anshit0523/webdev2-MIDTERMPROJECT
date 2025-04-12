import axios from 'axios';

const API = axios.create({
  baseURL: 'https://countries-api-abhishek.vercel.app',
});

export default API;
