import React from 'react';

import PropTypes from 'prop-types';
import { getImagePath } from '../../../../services/movies.service';

import './Media.scss';

const Media = ({ videos, photos }) => {
  return (
    <>
      <div className="media">
        <div>
          <div className="media-title">Watch Trailer</div>
          <div className="media-videos">
            {videos.map((video, index) => (
              <div key={video.key} className="video">
                <iframe
                  title="Avengers"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  src={`https://www.youtube.com/embed/${video.key}`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
        {photos && (
          <div>
            <div className="media-title">Photos ({photos.length})</div>
            <div className="media-images">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="image-cell"
                  style={{
                    backgroundImage: `url(${getImagePath(photo.file_path)})`
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Media.propTypes = {
  videos: PropTypes.array,
  photos: PropTypes.array
};

export default Media;
