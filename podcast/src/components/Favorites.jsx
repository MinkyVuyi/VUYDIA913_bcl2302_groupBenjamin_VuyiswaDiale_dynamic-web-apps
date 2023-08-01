import React from 'react';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <h3>{favorite.title}</h3>
          <div>Season {favorite.season} - Episode {favorite.number}</div>
          <div>{favorite.description}</div>
          {/* Display other favorite details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Favorites;
