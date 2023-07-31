import React from 'react';

const PodcastItem = ({ podcast, onToggleFavorite }) => {
  const handleToggleFavorite = () => {
    onToggleFavorite(podcast);
  };

  return (
    <div className="podcast-item">
      <img src={podcast.image} alt={`Podcast - ${podcast.title}`} />
      <h3>{podcast.title}</h3>
      <p>{podcast.description}</p>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <audio controls>
        <source src={podcast.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default PodcastItem;
