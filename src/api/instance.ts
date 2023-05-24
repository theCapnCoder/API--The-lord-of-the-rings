import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  }
})

export default instance;