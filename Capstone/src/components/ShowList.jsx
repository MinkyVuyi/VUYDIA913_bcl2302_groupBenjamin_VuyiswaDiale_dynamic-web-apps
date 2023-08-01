import React, { useState, useEffect } from 'react';

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then(response => response.json())
      .then(data => {
        setShows(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching show data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {shows.map(show => (
            <li key={show.id}>{show.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowList;
