// import React, { useEffect, useState } from 'react';
// import Header from './components/Header';
// import PodcastList from './components/PodcastList';

// const App = () => {
//   const [podcasts, setPodcasts] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API when the component mounts
//     fetch('https://podcast-api.netlify.app/shows')
//       .then((response) => response.json())
//       .then((data) => setPodcasts(data));
//   }, []);

//   return (
//     <div>
//       <Header />
//       <h1>Podcast App</h1>
//       <PodcastList podcasts={podcasts} />
//     </div>
//   );
// };

import React from "react";
import { useState } from "react";
import { getShows, getEpisodes } from "./api";

const App = () => {
  const [shows, setShows] = useState([]);

  const handleGetShows = () => {
    setShows(getShows());
  };

  const handleGetEpisodes = (showId) => {
    setShows(getEpisodes(showId));
  };

  return (
    <div>
      <button onClick={handleGetShows}>Get Shows</button>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
      <button onClick={() => handleGetEpisodes(shows[0].id)}>
        Get Episodes
      </button>
    </div>
  );
};

export default App;
