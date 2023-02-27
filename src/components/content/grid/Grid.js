import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clearMovieDetails } from '../../../redux/actions/movies';

import LazyImage from '../../lazy-image/LazyImage';
import Rating from '../rating/Rating';

import './Grid.scss';
import { Link } from 'react-router-dom';

const Grid = ({ movies, clearMovieDetails, movie }) => {
  const formatMovieTitle = (title) => {
    const titleStr = title.toLowerCase();
    return titleStr.replace(/ /g, '-');
  };

  useEffect(() => {
    if (movie.length > 0) {
      clearMovieDetails();
    }
  }, []);

  return (
    <>
      <div className="grid">
        {movies.map((movie, i) => (
          <div key={i}>
            <LazyImage className="grid-cell" src={movie.url} alt="placeholder">
              <div className="grid-read-more">
                <button className="grid-cell-button">
                  <Link to={`/${movie.id}/${formatMovieTitle(movie.title)}/details`}>Read more</Link>
                </button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">{movie.title}</span>
                <div className="grid-detail-rating">
                  <Rating rating={movie.rating} totalStars={10} />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{movie.rating}</div>
                </div>
              </div>
            </LazyImage>
          </div>
        ))}
      </div>
    </>
  );
};

Grid.propTypes = {
  movies: PropTypes.array,
  clearMovieDetails: PropTypes.func,
  movie: PropTypes.array
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, { clearMovieDetails })(Grid);
