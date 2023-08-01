import React, { useEffect, useState } from 'react';
import EpisodeListItem from './EpisodeListItem';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // Fetch data from the API and set it in the state
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => setEpisodes(data))
      .catch((error) => console.error('Error fetching episodes:', error));
  }, []);

  return (
    <div>
      <h2>Episode List</h2>
      {episodes.map((episode) => (
        <EpisodeListItem key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default EpisodeList;
