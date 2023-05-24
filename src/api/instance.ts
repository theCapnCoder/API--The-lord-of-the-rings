import axios from 'axios';

const token = 'UTmfZXkJOQl-_TuG1YnQ';

const instance = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  }
})

instance.interceptors.request.use((config) => {
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
},
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;