// FavouritesPage.js

import React, { useEffect, useState } from 'react';
import { fetchUserFavourites } from '../services/supabaseApi';

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Fetch user favourites when the component mounts
    const userId = getUserId(); // Replace this with your logic to get the user ID after login
    fetchUserFavourites(userId)
      .then((data) => setFavourites(data))
      .catch((error) => console.error('Error fetching user favourites:', error));
  }, []);

  return (
    <div>
      <h2>Favourites</h2>
      {/* Display the user's favourite episodes */}
      {favourites.map((favourite) => (
        <div key={favourite.id}>
          <h3>{favourite.episodeTitle}</h3>
          {/* Other favourite episode details */}
        </div>
      ))}
    </div>
  );
};

export default FavouritesPage;
