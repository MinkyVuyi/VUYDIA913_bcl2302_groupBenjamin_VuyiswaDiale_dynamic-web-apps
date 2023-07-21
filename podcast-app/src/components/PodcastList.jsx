import React from 'react';
import PodcastItem from './PodcastItem';
import './PodcastList.css'; // Import the custom CSS file

const PodcastList = ({ podcasts }) => {
  return (
    <div className="podcast-list">
      {podcasts.map((podcast) => (
        <PodcastItem key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
};

export default PodcastList;
