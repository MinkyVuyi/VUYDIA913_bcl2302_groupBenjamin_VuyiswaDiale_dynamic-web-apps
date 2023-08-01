import React, { useEffect, useState } from 'react';

const SeasonDetails = ({ showId, seasonNumber }) => {
  const [seasonDetails, setSeasonDetails] = useState(null);

  useEffect(() => {
    // Fetch data for the specific season from the API and set it in the state
    fetch(`https://podcast-api.netlify.app/shows/${showId}/seasons/${seasonNumber}`)
      .then((response) => response.json())
      .then((data) => setSeasonDetails(data))
      .catch((error) => console.error('Error fetching season details:', error));
  }, [showId, seasonNumber]);

  if (!seasonDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="season-details">
      <h2>Season {seasonDetails.seasonNumber}</h2>
      <div>Description: {seasonDetails.description}</div>
      <ul>
        {seasonDetails.episodes.map((episode) => (
          <li key={episode.id}>
            <strong>{episode.title}</strong>
            <div>Episode Number: {episode.number}</div>
            <div>{episode.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeasonDetails;
