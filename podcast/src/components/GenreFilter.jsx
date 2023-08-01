import React from 'react';

const GenreFilter = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="genre-filter">
      <h2>Filter by Genre</h2>
      <select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
