import React from 'react';

import PropTypes from 'prop-types';

import LazyImage from '../../lazy-image/LazyImage';
import Rating from '../rating/Rating';

import './Grid.scss';
import { Link } from 'react-router-dom';

const Grid = ({ movies }) => {
  const formatMovieTitle = (title) => {
    const titleStr = title.toLowerCase();
    return titleStr.replace(/ /g, '-');
  };
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
  movies: PropTypes.array
};

export default Grid;
