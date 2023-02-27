import {
  MOVIES_API_SERVICE,
  MOVIES_DETAILS_API_SERVICE,
  MOVIES_SEARCH_API_SERVICE,
  MOVIES_CREDITS_API_SERVICE,
  MOVIES_IMAGES_API_SERVICE,
  MOVIES_VIDEOS_API_SERVICE,
  MOVIES_REVIEWS_API_SERVICE
} from '../../services/movies.service';
import {
  MOVIES_LIST,
  SET_ERROR,
  LOAD_MORE_MOVIES,
  START_LOADING_MOVIES,
  MOVIES_LOADING_FINISHED,
  CHANGE_MOVIE_TYPE,
  SEARCH_MOVIES_RESULT,
  SEARCH_MOVIES_QUERY,
  MOVIES_DETAILS,
  MOVIES_DETAILS_CLEAR
} from '../types';

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_MOVIES });
    const response = await MOVIES_API_SERVICE(type, pageNumber);
    dispatch({ type: MOVIES_LOADING_FINISHED });
    dispatch({ type: MOVIES_LIST, payload: response.data });
  } catch (e) {
    dispatch({ type: MOVIES_LOADING_FINISHED });
    if (e.response) {
      dispatch({ type: SET_ERROR, payload: e.response.data.message });
    }
  }
};

export const getMovieDetails = (id) => async (dispatch) => {
  try {
    const details = await MOVIES_DETAILS_API_SERVICE(id);
    const credits = await MOVIES_CREDITS_API_SERVICE(id);
    const images = await MOVIES_IMAGES_API_SERVICE(id);
    const videos = await MOVIES_VIDEOS_API_SERVICE(id);
    const reviews = await MOVIES_REVIEWS_API_SERVICE(id);
    const response = await Promise.all([details, credits, images, videos, reviews]).then((values) => {
      return values.map((value) => value.data);
    });
    dispatch({ type: MOVIES_DETAILS, payload: response });
  } catch (e) {
    dispatch({ type: MOVIES_LOADING_FINISHED });
    if (e.response) {
      dispatch({ type: SET_ERROR, payload: e.response.data.message });
    }
  }
};

export const clearMovieDetails = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIES_DETAILS_CLEAR });
  } catch (e) {
    dispatch({ type: MOVIES_LOADING_FINISHED });
    if (e.response) {
      dispatch({ type: SET_ERROR, payload: e.response.data.message });
    }
  }
};

export const getMoreMovies = (type, pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_MOVIES });
    const response = await MOVIES_API_SERVICE(type, pageNumber);
    dispatch({ type: LOAD_MORE_MOVIES, payload: response.data });
    dispatch({ type: MOVIES_LOADING_FINISHED });
  } catch (e) {
    dispatch({ type: MOVIES_LOADING_FINISHED });
    if (e.response) {
      dispatch({ type: SET_ERROR, payload: e.response.data.message });
    }
  }
};

export const changeMovieType = (type, typeName) => async (dispatch) => {
  try {
    dispatch({ type: CHANGE_MOVIE_TYPE, payload: { movieType: type, typeName } });
  } catch (e) {
    if (e.response) {
      dispatch({ type: SET_ERROR, payload: e.response.data.message });
    }
  }
};

export const getSearchMoviesResult = (query) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_MOVIES });
    const response = await MOVIES_SEARCH_API_SERVICE(query);
    dispatch({ type: MOVIES_LOADING_FINISHED });
    dispatch({ type: SEARCH_MOVIES_RESULT, payload: response.data });
    dispatch({ type: SEARCH_MOVIES_QUERY, payload: { query } });
  } catch (e) {
    dispatch({ type: MOVIES_LOADING_FINISHED });
    if (e.response) {
      dispatch({ type: SET_ERROR, payload: e.response.data.message });
    }
  }
};
