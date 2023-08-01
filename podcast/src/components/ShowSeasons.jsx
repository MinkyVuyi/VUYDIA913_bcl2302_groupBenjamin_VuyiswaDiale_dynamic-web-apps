import React from 'react';
import ShowSeasonListItem from './ShowSeasonListItem';

const ShowSeasons = ({ showSeasons }) => {
  return (
    <div>
      <h2>Show Seasons</h2>
      {showSeasons.map((season) => (
        <ShowSeasonListItem key={season.id} season={season} />
      ))}
    </div>
  );
};

export default ShowSeasons;
