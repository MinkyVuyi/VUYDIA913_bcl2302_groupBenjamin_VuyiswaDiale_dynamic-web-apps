import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import PodcastList from './components/PodcastList';

const App = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => setPodcasts(data));
  }, []);

  return (
    <div>
      <Header />
      <h1>Podcast App</h1>
      <PodcastList podcasts={podcasts} />
    </div>
  );
};

export default App;
