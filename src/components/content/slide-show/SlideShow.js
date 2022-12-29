import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './SlideShow.scss';

const SlideShow = (props) => {
  const { images } = props;

  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const { slideShow, slideIndex } = state;

  const moveSlideWithArrows = (type) => {
    let index = currentIndex;
    if (type === 'prev') {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index -= 1;
      }
      setCurrentIndex(index);
      setState((prev) => ({
        ...prev,
        slideShow: images[index],
        slideIndex: index
      }));
    }
    if (type === 'next') {
      if (currentIndex >= images.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
      setCurrentIndex(index);
      setState((prev) => ({
        ...prev,
        slideShow: images[index],
        slideIndex: index
      }));
    }
  };

  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div className="slider-arrow slider-arrow--left" onClick={() => moveSlideWithArrows('prev')}></div>
        <div className="slider-arrow slider-arrow--right" onClick={() => moveSlideWithArrows('next')}></div>
      </div>
    );
  };

  const Indicators = (props) => {
    const { currentSlide } = props;
    const listIndicators = images.map((slide, i) => {
      const btnClasses = i === currentSlide ? 'slider-navButton slider-navButton--active' : 'slider-navButton';
      return <button className={btnClasses} key={i} />;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  Indicators.propTypes = {
    currentSlide: PropTypes.number.isRequired
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      moveSlideWithArrows('next');
    }, 3000);
    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <div className="slider">
      <div className="slider-slides">{images && images.length && slideShow && <div className="slider-image" style={{ backgroundImage: `url(${slideShow.url})` }}></div>}</div>
      <Indicators currentSlide={slideIndex} />
      <RenderArrows />
    </div>
  );
};

SlideShow.propTypes = {
  images: PropTypes.array.isRequired
};

export default SlideShow;
