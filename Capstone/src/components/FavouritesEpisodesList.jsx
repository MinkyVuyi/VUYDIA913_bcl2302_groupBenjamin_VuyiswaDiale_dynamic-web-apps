import React from 'react';

const FavoriteEpisodesList = ({ favoriteEpisodes, onToggleFavorite }) => {
  // Group favorite episodes by show and season
  const groupedEpisodes = favoriteEpisodes.reduce((acc, episode) => {
    const showTitle = episode.showTitle;
    const seasonNumber = episode.seasonNumber;
    const key = `${showTitle}-${seasonNumber}`;

    if (!acc[key]) {
      acc[key] = {
        showTitle,
        seasonNumber,
        episodes: [episode],
      };
    } else {
      acc[key].episodes.push(episode);
    }

    return acc;
  }, {});

  return (
    <div>
      {Object.values(groupedEpisodes).map((group) => (
        <div key={`${group.showTitle}-${group.seasonNumber}`}>
          <h3>{`${group.showTitle} - Season ${group.seasonNumber}`}</h3>
          {group.episodes.map((episode) => (
            <PodcastItem
              key={episode.id}
              podcast={episode}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FavoriteEpisodesList;
