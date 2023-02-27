import { CHANGE_MOVIE_TYPE, LOAD_MORE_MOVIES, MOVIES_LIST, MOVIES_LOADING_FINISHED, START_LOADING_MOVIES, SEARCH_MOVIES_QUERY, SEARCH_MOVIES_RESULT } from '../types';

const initialState = { list: [], searchResults: [], searchQuery: '', type: 'now_playing', typeName: 'Now playing', loading: false, page: 1, totalPages: 0 };

export default (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case MOVIES_LIST:
      return { ...state, list: payload.results, page: payload.page, totalPages: payload.total_pages };
    case LOAD_MORE_MOVIES:
      return { ...state, list: [...state.list, ...payload.results], page: payload.page };
    case START_LOADING_MOVIES:
      return { ...state, loading: true };
    case CHANGE_MOVIE_TYPE:
      return { ...state, type: payload.movieType, typeName: payload.typeName };
    case MOVIES_LOADING_FINISHED:
      return { ...state, loading: false };
    case SEARCH_MOVIES_QUERY:
      return { ...state, searchQuery: payload.query };
    case SEARCH_MOVIES_RESULT:
      return { ...state, searchResults: payload.results };
    default:
      return state;
  }
};
