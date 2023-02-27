import React, { useState, useEffect } from 'react';
import { getImagePath } from '../../../../services/movies.service';

import PropTypes from 'prop-types';

import './Overview.scss';

const Overview = ({ details, overview }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const detailItems = [
      {
        id: 0,
        name: 'Tagline',
        value: details.tagline
      },
      {
        id: 1,
        name: 'Budget',
        value: `${numberFormatter(details.budget, 1)}`
      },
      {
        id: 2,
        name: 'Revenue',
        value: `${numberFormatter(details.revenue, 1)}`
      },
      {
        id: 3,
        name: 'Status',
        value: details.status
      },
      {
        id: 4,
        name: 'Release Date',
        value: details.release_date
      },
      {
        id: 5,
        name: 'Run Time',
        value: `${details.runtime} min`
      }
    ];
    setItems(detailItems);
    // eslint-disable-next-line
  }, []);

  const numberFormatter = (number, digits) => {
    const symbolArray = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'K' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'B' }
    ];
    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let result = '';

    for (let i = 0; i < symbolArray.length; i++) {
      if (number >= symbolArray[i].value) {
        result = (number / symbolArray[i].value).toFixed(digits).replace(regex, '$1') + symbolArray[i].symbol;
      }
    }
    return result;
  };

  return (
    <>
      {overview && (
        <div className="overview">
          <div className="overview-column-1">
            <div className="description">{details.description}</div>

            <div className="cast">
              <div className="div-title">Cast</div>
              <table>
                <tbody>
                  {overview.cast.map((actor) => (
                    <tr key={actor.credit_id}>
                      <td>
                        <img src={getImagePath(actor.profile_path)} alt="actor picture" />
                      </td>
                      <td>{actor.original_name}</td>
                      <td>{actor.character}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="overview-column-2">
            <div className="overview-detail">
              <h6>Production Companies</h6>
              {details.production_companies.map((company) => (
                <div key={company.id} className="product-company">
                  <img src={getImagePath(company.logo_path)} alt="production company" />
                  <span>{company.name}</span>
                </div>
              ))}
            </div>
            <div className="overview-detail">
              <h6>Language(s)</h6>
              {details.spoken_languages.map((lang) => (
                <p key={lang.iso_639_1}>
                  <a href="!#">{lang.name}</a>
                </p>
              ))}
            </div>
            {items.map((data) => (
              <div className="overview-detail" key={data.id}>
                <h6>{data.name}</h6>
                <p>
                  <a href="!#">{data.value}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

Overview.propTypes = {
  details: PropTypes.object,
  overview: PropTypes.object
};

export default Overview;
