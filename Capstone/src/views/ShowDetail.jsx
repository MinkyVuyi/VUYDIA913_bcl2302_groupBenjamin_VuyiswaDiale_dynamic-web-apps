// ShowDetail.js

import React from 'react';

const ShowDetail = ({ show }) => {
  return (
    <div>
      <h2>{show.title}</h2>
      <p>Last Updated: {show.lastUpdated}</p>
      <div>
        {show.seasons.map((season) => (
          <div key={season.seasonNumber}>
            <h3>Season {season.seasonNumber}</h3>
            <ul>
              {season.episodes.map((episode) => (
                <li key={episode.id}>{episode.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowDetail;
