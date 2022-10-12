import axios from 'axios';
import { getItem } from '@SessionStorage';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

const axiosAuthApi = (url, options) => {
  const token = getItem('userInformation');
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: 'Bearer ' + token },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
export const authInstance = axiosAuthApi(BASE_URL);
