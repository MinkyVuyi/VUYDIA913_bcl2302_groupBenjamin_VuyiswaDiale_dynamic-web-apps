import React, { useState } from 'react';

const ShowList = ({ shows }) => {
  const [sortBy, setSortBy] = useState('title'); // Default sorting by title
  const [filterByGenre, setFilterByGenre] = useState('');

  // Function to handle sorting change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Function to handle genre filter change
  const handleFilterChange = (event) => {
    setFilterByGenre(event.target.value);
  };

  // Filter and sort the shows based on the selected options
  const filteredAndSortedShows = shows
    .filter((show) => !filterByGenre || show.genres.includes(filterByGenre))
    .sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'lastUpdated') {
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      }
      return 0;
    });

  return (
    <div className="show-list">
      <h2>Show List</h2>
      <div>
        <label>
          Sort By:
          <select value={sortBy} onChange={handleSortChange}>
            <option value="title">Title</option>
            <option value="lastUpdated">Last Updated</option>
          </select>
        </label>
        <label>
          Filter By Genre:
          <select value={filterByGenre} onChange={handleFilterChange}>
            <option value="">All</option>
            {/* Assuming genres is an array of unique genre names */}
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ul>
        {filteredAndSortedShows.map((show) => (
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
