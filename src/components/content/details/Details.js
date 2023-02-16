import React from 'react';
import Rating from '../rating/Rating';
import Crew from './Crew/Crew';

import './Details.scss';
import Media from './Media/Media';
import Overview from './overview/Overview';
import Reviews from './Reviews/Reviews';
import Tabs from './tabs/Tabs';

const Details = () => {
  return (
    <div className="movie-container">
      <div className="movie-bg" style={{ backgroundImage: 'url(https://www.google.com/logos/doodles/2023/serbia-national-day-2023-6753651837109844-law.gif)' }}></div>
      <div className="movie-overlay"></div>
      <div className="movie-details">
        <div className="movie-image">
          <img src="https://www.google.com/logos/doodles/2023/serbia-national-day-2023-6753651837109844-law.gif"></img>
        </div>
        <div className="movie-body">
          <div className="movie-overview">
            <div className="title">
              Avengers <span>2020-12-03</span>
            </div>
            <div className="movie-genres">
              <ul className="genres">
                <li>Action</li>
                <li>Comedy</li>
                <li>Sci-fi</li>
              </ul>
            </div>
          </div>
          <div className="rating">
            <Rating className="rating-stars" rating={6.5} totalStars={10} />
            &nbsp;
            <span>6.7</span> <p>(200) reviews</p>
          </div>
          <Tabs>
            <div label="Overview">
              <Overview />
            </div>
            <div label="Crew">
              <Crew />
            </div>
            <div label="Media">
              <Media />
            </div>
            <div label="Reviews">
              <Reviews />
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Details;
