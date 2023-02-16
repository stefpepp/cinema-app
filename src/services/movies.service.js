import axios from 'axios';

const REQUEST_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_SECRET;
export const getImagePath = (poster_path) => `https://image.tmdb.org/t/p/original${poster_path}`;

export const MOVIES_API_SERVICE = async (type, page) => {
  const response = await axios.get(`${REQUEST_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`);
  return response;
};

export const MOVIES_SEARCH_API_SERVICE = async (query) => {
  const response = await axios.get(`${REQUEST_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
  return response;
};
