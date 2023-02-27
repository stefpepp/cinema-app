import React from 'react';
import PropTypes from 'prop-types';

import './Reviews.scss';

const Reviews = ({ reviews }) => {
  return (
    <>
      <div className="movie-reviews">
        <div className="div-title">Reviews ({reviews.length})</div>
        <div className="reviews">
          {reviews.map((review) => (
            <>
              <h3>{review.author}</h3>
              <div className="review-content">{review.content}</div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array
};

export default Reviews;
