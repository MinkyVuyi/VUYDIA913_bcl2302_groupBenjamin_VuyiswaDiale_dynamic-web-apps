import React from 'react';

const ShowDetails = ({ show }) => {
  return (
    <div className="show-details">
      <h2>Show Details</h2>
      <img src={show.imageUrl} alt={show.title} />
      <div>
        <strong>{show.title}</strong>
      </div>
      <div>Genres: {show.genres.join(', ')}</div>
      <div>Last Updated: {show.lastUpdated}</div>
      {/* You can add more show details or UI elements as needed */}
    </div>
  );
};

export default ShowDetails;
