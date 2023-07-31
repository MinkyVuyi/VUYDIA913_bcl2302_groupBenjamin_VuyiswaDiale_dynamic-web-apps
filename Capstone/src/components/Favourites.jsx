import React, { useState } from 'react';
import FavoriteEpisodesList from './FavoriteEpisodesList';

const Favorites = () => {
  const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);

  const handleToggleFavorite = (episode) => {
    const isEpisodeFavorite = favoriteEpisodes.some((favEpisode) => favEpisode.id === episode.id);

    if (isEpisodeFavorite) {
      const updatedFavoriteEpisodes = favoriteEpisodes.filter((favEpisode) => favEpisode.id !== episode.id);
      setFavoriteEpisodes(updatedFavoriteEpisodes);
    } else {
      setFavoriteEpisodes((prevFavoriteEpisodes) => [...prevFavoriteEpisodes, episode]);
    }
  };

  return (
    <div>
      <h2>Favorite Episodes</h2>
      <FavoriteEpisodesList favoriteEpisodes={favoriteEpisodes} onToggleFavorite={handleToggleFavorite} />
    </div>
  );
};

export default Favorites;
