import React from 'react';

const EpisodeListItem = ({ episode }) => {
  return (
    <div className="episode-list-item">
      <div>
        <strong>{episode.title}</strong>
      </div>
      <div>Season {episode.season} - Episode {episode.number}</div>
      <div>{episode.description}</div>
      {/* You can add more details or UI elements as needed */}
    </div>
  );
};

export default EpisodeListItem;
