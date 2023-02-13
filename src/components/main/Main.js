import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMoreMovies } from '../../redux/actions/movies';
import MainContent from '../content/main-content/MainContent';
// import Spinner from '../spinner/Spinner';
import './Main.scss';
import Spinner from '../spinner/Spinner';

const Main = ({ list, loading, totalPages, page, getMoreMovies }) => {
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
      {loading && list < 1 ? <Spinner /> : <MainContent />}
      <div ref={bottomDivRef}></div>
    </div>
  );
};

Main.propTypes = {
  loading: PropTypes.bool,
  getMoreMovies: PropTypes.func,
  totalPages: PropTypes.number,
  page: PropTypes.number,
  list: PropTypes.array
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  totalPages: state.movies.totalPages,
  page: state.movies.page,
  list: state.movies.list
});

export default connect(mapStateToProps, { getMoreMovies })(Main);
