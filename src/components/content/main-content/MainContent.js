import React from 'react';
import SlideShow from '../slide-show/SlideShow';

import './MainContent.scss';

const MainContent = () => {
  const images = [
    { url: 'https://lumiere-a.akamaihd.net/v1/images/image_b3c7d632.jpeg?region=0,0,743,1100&width=480' },
    { url: 'https://amc-theatres-res.cloudinary.com/v1668168901/amc-cdn/production/2/movies/62300/62331/Poster/Primary_BoxCover_HD_800_1200.jpg' },
    { url: 'https://lumiere-a.akamaihd.net/v1/images/p_shangchiandthelegendofthetenringshomeentupdate_22055_7b62fa67.jpeg?region=0%2C0%2C540%2C800' }
  ];
  const auto = true;
  return (
    <div className="main-content">
      <SlideShow images={images} auto={auto} />
      <div className="grid-movie-title">
        <div className="movieType">Now playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
