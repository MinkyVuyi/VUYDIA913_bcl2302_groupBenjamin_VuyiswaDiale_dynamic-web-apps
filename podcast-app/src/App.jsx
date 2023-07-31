import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import PodcastList from './components/PodcastList';
//import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "YOUR_SUPABASE_PROJECT_URL";
// const supabaseKey = "YOUR_SUPABASE_PROJECT_API_KEY";
// const supabase = createClient(supabaseUrl, supabaseKey);

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
