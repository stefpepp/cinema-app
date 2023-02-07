import React, { useState } from 'react';
import Grid from '../grid/Grid';
import Paginate from '../paginate/Paginate';
import SlideShow from '../slide-show/SlideShow';

import './MainContent.scss';

const MainContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const images = [
    { url: 'https://lumiere-a.akamaihd.net/v1/images/image_b3c7d632.jpeg?region=0,0,743,1100&width=480', rating: 7.5 },
    { url: 'https://amc-theatres-res.cloudinary.com/v1668168901/amc-cdn/production/2/movies/62300/62331/Poster/Primary_BoxCover_HD_800_1200.jpg', rating: 8.5 },
    { url: 'https://lumiere-a.akamaihd.net/v1/images/p_shangchiandthelegendofthetenringshomeentupdate_22055_7b62fa67.jpeg?region=0%2C0%2C540%2C800', rating: 9.7 },
    { url: 'https://lumiere-a.akamaihd.net/v1/images/image_b3c7d632.jpeg?region=0,0,743,1100&width=480', rating: 7.5 },
    { url: 'https://amc-theatres-res.cloudinary.com/v1668168901/amc-cdn/production/2/movies/62300/62331/Poster/Primary_BoxCover_HD_800_1200.jpg', rating: 6.5 },
    { url: 'https://lumiere-a.akamaihd.net/v1/images/p_shangchiandthelegendofthetenringshomeentupdate_22055_7b62fa67.jpeg?region=0%2C0%2C540%2C800', rating: 8.5 }
  ];
  const auto = true;
  return (
    <div className="main-content">
      <SlideShow images={images} auto={auto} />
      <div className="grid-movie-title">
        <div className="movieType">Now playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
