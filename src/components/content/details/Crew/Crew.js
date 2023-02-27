import React from 'react';
import PropTypes from 'prop-types';

import { getImagePath } from '../../../../services/movies.service';

import './Crew.scss';

const Crew = ({ crew }) => {
  return (
    <>
      <div className="cast">
        <div className="div-title">Crew</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="head">Department</th>
              <th className="head">Job</th>
            </tr>
          </thead>
          <tbody>
            {crew.map((crewMember) => (
              <tr key={crewMember.creditId}>
                <td>
                  <img src={getImagePath(crewMember.profile_path)} alt="crew member" />
                </td>
                <td>{crewMember.original_name}</td>
                <td>{crewMember.known_for_department}</td>
                <td>{crewMember.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

Crew.propTypes = {
  crew: PropTypes.array
};

export default Crew;
