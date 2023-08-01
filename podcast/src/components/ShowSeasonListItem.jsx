import React from 'react';

const ShowSeasonListItem = ({ seasons }) => {
  return (
    <div className="show-season-list-item">
      <h2>Seasons</h2>
      <ul>
        {seasons.map((season) => (
          <li key={season.number}>
            <strong>Season {season.number}</strong>
            <div>{season.description}</div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowSeasonListItem;
