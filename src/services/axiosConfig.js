import axios from 'axios';
const baseUrl  = 'http://learnroom.herokuapp.com/'
const AUTH_TOKEN =  'token';

const customRequest = () => {
  const defaultOptions = {
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  let instance = axios.create(defaultOptions);
  instance.interceptors.request.use(async (config) => {
    config.headers.Authorization = AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : '';
    return config;
  });
}

export default customRequest;
