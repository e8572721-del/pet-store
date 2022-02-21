import axios from 'axios';
import { API_URL } from './api.json';

const fetchData = () => {
  return axios
    .get(API_URL)
    .then((response) => response.data.pets)
    .catch((error) => {
      console.error(error);
    });
};

export default fetchData;
