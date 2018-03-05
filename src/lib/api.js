import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=3bTPz17XLGJErMX6uI1m1mrxBlCEDl0HN6GETyyk&date=${date}`);
}