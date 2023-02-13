import React from 'react';

import PropTypes from 'prop-types';

import LazyImage from '../../lazy-image/LazyImage';
import Rating from '../rating/Rating';

import './Grid.scss';

const Grid = ({ movies }) => {
  return (
    <>
      <div className="grid">
        {movies.map((movie, i) => (
          <div key={i}>
            <LazyImage className="grid-cell" src={movie.url} alt="placeholder">
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
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
