import React from 'react';

const ShowList = ({ shows }) => {
  return (
    <div className="show-list">
      <h2>Show List</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <img src={show.imageUrl} alt={show.title} />
            <div>
              <strong>{show.title}</strong>
            </div>
            <div>Genres: {show.genres.join(', ')}</div>
            <div>Last Updated: {show.lastUpdated}</div>
            {/* You can add more show details or UI elements as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
