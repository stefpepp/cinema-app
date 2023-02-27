import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMoreMovies } from '../../redux/actions/movies';
import MainContent from '../content/main-content/MainContent';
// import Spinner from '../spinner/Spinner';
import './Main.scss';
import Spinner from '../spinner/Spinner';
import SearchResults from '../content/search-results/SearchResults';

const Main = ({ list, loading, totalPages, page, getMoreMovies, searchResults, searchQuery }) => {
  const mainDivRef = useRef();
  const bottomDivRef = useRef();

  const handleScroll = () => {
    const windowHeight = mainDivRef.current.getBoundingClientRect().height;
    const bottomDivTop = bottomDivRef.current.getBoundingClientRect().top;
    if (bottomDivTop <= windowHeight && page < totalPages && !loading) {
      getMoreMovies('now_playing', page + 1);
    }
  };

  return (
    <div className="main" ref={mainDivRef} onScroll={handleScroll}>
      {loading && list < 1 ? <Spinner /> : searchQuery && searchQuery.length > 0 ? <SearchResults searchResults={searchResults} searchQuery={searchQuery} /> : <MainContent />}
      <div ref={bottomDivRef}></div>
    </div>
  );
};

Main.propTypes = {
  loading: PropTypes.bool,
  getMoreMovies: PropTypes.func,
  searchResults: PropTypes.array,
  searchQuery: PropTypes.string,
  totalPages: PropTypes.number,
  page: PropTypes.number,
  list: PropTypes.array
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  totalPages: state.movies.totalPages,
  page: state.movies.page,
  list: state.movies.list,
  searchResults: state.movies.searchResults,
  searchQuery: state.movies.searchQuery
});

export default connect(mapStateToProps, { getMoreMovies })(Main);
