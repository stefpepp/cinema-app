import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { getMovies } from '../../../redux/actions/movies';
import Grid from '../grid/Grid';
import Paginate from '../paginate/Paginate';
import SlideShow from '../slide-show/SlideShow';

import './MainContent.scss';
import { getImagePath } from '../../../services/movies.service';

const MainContent = ({ list, page, totalPages, type, typeName, getMovies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    list.length > 0 &&
      setMovies(
        list.map((el) => {
          return { id: el.id, title: el.title, url: getImagePath(el.poster_path), rating: el.vote_average };
        })
      );
  }, [list]);

  useEffect(() => {
    getMovies(type, currentPage);
  }, [currentPage]);

  const auto = true;

  const slideMovies = movies.slice(0, 6);

  return (
    <div className="main-content">
      {movies.length > 0 && <SlideShow movies={slideMovies} auto={auto} />}
      <div className="grid-movie-title">
        <div className="movieType">{typeName}</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
        </div>
      </div>
      <Grid movies={movies} />
    </div>
  );
};

MainContent.propTypes = {
  list: PropTypes.array,
  totalPages: PropTypes.number,
  type: PropTypes.string,
  typeName: PropTypes.string,
  page: PropTypes.number,
  getMovies: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    list: state.movies.list,
    page: state.movies.page,
    totalPages: state.movies.totalPages,
    type: state.movies.type,
    typeName: state.movies.typeName
  };
};

export default connect(mapStateToProps, { getMovies })(MainContent);
