import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovieDetails } from '../../../redux/actions/movies';

import Rating from '../rating/Rating';
import Crew from './Crew/Crew';

import './Details.scss';
import Media from './Media/Media';
import Overview from './overview/Overview';
import Reviews from './Reviews/Reviews';
import Tabs from './tabs/Tabs';
import { getImagePath } from '../../../services/movies.service';

const Details = ({ getMovieDetails, movie }) => {
  const [details, setDetails] = useState();
  const { id: movieId } = useParams();
  useEffect(() => {
    if (movie.length === 0) {
      getMovieDetails(movieId);
    }
    movie && setDetails(movie[0]);
  }, [movie]);

  return (
    <div className="movie-container">
      {details && (
        <>
          <div className="movie-bg" style={{ backgroundImage: `url(${getImagePath(details.backdrop_path)})` }}></div>
          <div className="movie-overlay"></div>
          <div className="movie-details">
            <div className="movie-image">
              <img src={getImagePath(details.poster_path)}></img>
            </div>
            <div className="movie-body">
              <div className="movie-overview">
                <div className="title">
                  {details.title} <span>{details.release_date}</span>
                </div>
                <div className="movie-genres">
                  <ul className="genres">
                    {details.genres.map((genre, index) => (
                      <li key={index}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="rating">
                  <Rating className="rating-stars" rating={details.vote_average} totalStars={10} />
                  &nbsp;
                  <span>{parseFloat(details.vote_average).toFixed(1)}</span> <p>({details.vote_count}) reviews</p>
                </div>
              </div>
              <Tabs>
                <div label="Overview">
                  <Overview description={details.overview} details={details} overview={movie[1]} />
                </div>
                <div label="Crew">
                  <Crew crew={movie[1].crew} />
                </div>
                <div label="Media">
                  <Media photos={movie[2].posters} videos={movie[3].results} />
                </div>
                <div label="Reviews">
                  <Reviews reviews={movie[4].results} />
                </div>
              </Tabs>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Details.propTypes = {
  getMovieDetails: PropTypes.func,
  movie: PropTypes.array
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, { getMovieDetails })(Details);
