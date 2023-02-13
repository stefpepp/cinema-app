import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeMovieType, getMovies } from '../../redux/actions/movies';

import logo from '../../assets/cinema-logo.svg';
import './Header.scss';

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now playing',
    type: 'now_playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top rated',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];

const Header = ({ getMovies, changeMovieType, type, page }) => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);

  useEffect(() => {
    getMovies(type, page);
  }, [type, page]);

  const toggleMenu = () => {
    setMenuClass(!menuClass);
    setNavClass(!navClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt=""></img>
          </div>
          <div className={`${menuClass ? 'header-menu-toggle is-actieve' : 'header-menu-toggle'}`} id="header-mobile-menu" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
            {HEADER_LIST.map((headerItem) => (
              <li
                key={headerItem.id}
                className={`header-nav-item ${headerItem.type === type ? 'active-item' : ''}`}
                onClick={() => {
                  changeMovieType(headerItem.type, headerItem.name);
                }}
              >
                <span className="header-list-name">
                  <i className={headerItem.iconClass}></i>
                </span>
                &nbsp;
                <span className="header-list-name">{headerItem.name}</span>
              </li>
            ))}
            <input className="search-input" type="text" placeholder="search for a movie"></input>
          </ul>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  getMovies: PropTypes.func,
  changeMovieType: PropTypes.func,
  type: PropTypes.string,
  page: PropTypes.number
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  type: state.movies.type,
  page: state.movies.number
});

export default connect(mapStateToProps, { getMovies, changeMovieType })(Header);
