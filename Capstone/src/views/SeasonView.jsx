// SeasonView.js

import React from 'react';

const SeasonView = ({ season }) => {
  return (
    <div>
      <h2>Season {season.seasonNumber}</h2>
      <ul>
        {season.episodes.map((episode) => (
          <li key={episode.id}>
            {episode.title} - <button onClick={() => handleListen(episode)}>Listen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeasonView;
