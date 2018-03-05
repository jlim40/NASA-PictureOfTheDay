import axios from 'axios';

export getAPOD = (date = '') => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=3bTPz17XLGJErMX6uI1m1mrxBlCEDl0HN6GETyyk=${date}')
}