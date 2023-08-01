// IndividualShowView.js

import React, { useEffect, useState } from 'react';
import ShowDetail from './ShowDetail';
import SeasonView from './SeasonView';

const IndividualShowView = () => {
  const [showData, setShowData] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'showId' with the actual ID of the show you want to fetch
    fetch(`https://podcast-api.netlify.app/shows/showId`)
      .then((response) => response.json())
      .then((data) => {
        setShowData(data);
        setSelectedSeason(data.seasons[0]); // Set the default selected season
        setLoading(false);
      });
  }, []);

  const handleSeasonToggle = (season) => {
    setSelectedSeason(season);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ShowDetail show={showData} />
      <div>
        {showData.seasons.map((season) => (
          <button
            key={season.seasonNumber}
            onClick={() => handleSeasonToggle(season)}
          >
            Season {season.seasonNumber}
          </button>
        ))}
      </div>
      {selectedSeason && <SeasonView season={selectedSeason} />}
    </div>
  );
};

export default IndividualShowView;
