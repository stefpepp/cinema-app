import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { clearMovieDetails } from '../../../redux/actions/movies';

import Rating from '../rating/Rating';
import LazyImage from '../../lazy-image/LazyImage';

import './SearchResults.scss';
import { getImagePath } from '../../../services/movies.service';
import { Link } from 'react-router-dom';

const SearchResults = ({ clearMovieDetails, searchResults, searchQuery, movie }) => {
  useEffect(() => {
    if (movie.length > 0) {
      clearMovieDetails();
    }
  }, []);
  const formatMovieTitle = (title) => {
    const titleStr = title.toLowerCase();
    return titleStr.replace(/ /g, '-');
  };
  return (
    <div className="searchKeyword">
      <div className="grid-search-title">
        <span className="grid-text1">Your search keyword</span>
        <span className="grid-text2">{searchQuery}</span>
      </div>
      <div className="grid">
        {searchResults &&
          searchResults.map((movie, i) => (
            <div key={i}>
              <LazyImage className="grid-cell" src={getImagePath(movie.backdrop_path)} alt="placeholder">
                <div className="grid-read-more">
                  <button className="grid-cell-button">
                    <Link to={`/${movie.id}/${formatMovieTitle(movie.title)}/details`}>Read more</Link>
                  </button>
                </div>
                <div className="grid-detail">
                  <span className="grid-detail-title">{movie.title}</span>
                  <div className="grid-detail-rating">
                    <Rating rating={movie.vote_average} totalStars={10} />
                    &nbsp;&nbsp;
                    <div className="grid-vote-average">{movie.vote_average}</div>
                  </div>
                </div>
              </LazyImage>
            </div>
          ))}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array,
  searchQuery: PropTypes.string,
  clearMovieDetails: PropTypes.func,
  movie: PropTypes.array
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, { clearMovieDetails })(SearchResults);
