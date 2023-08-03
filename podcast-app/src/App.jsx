// import React, { useEffect, useState } from 'react';
// import Header from './components/Header';
// import PodcastList from './components/PodcastList';
// //import { createClient } from "@supabase/supabase-js";

// // const supabaseUrl = "YOUR_SUPABASE_PROJECT_URL";
// // const supabaseKey = "YOUR_SUPABASE_PROJECT_API_KEY";
// // const supabase = createClient(supabaseUrl, supabaseKey);

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

// export default App;


import React, { useEffect, useState } from 'react';
import Header from './components/Navbar';
import PodcastList from './components/PodcastList';

const App = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => setPodcasts(data));
  }, []);

  const handlePlayPause = (episode) => {
    if (currentEpisode && currentEpisode.id === episode.id && isPlaying) {
      // Pause the audio if the same episode is already playing
      setIsPlaying(false);
    } else {
      // Play the audio if a new episode is clicked or paused episode is resumed
      setCurrentEpisode(episode);
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <Header />
      <h1>Podcast App</h1>
      <PodcastList podcasts={podcasts} handlePlayPause={handlePlayPause} />
      {currentEpisode && (
        <div>
          <h2>Now Playing: {currentEpisode.title}</h2>
          <audio controls autoPlay={isPlaying}>
            <source src={currentEpisode.audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default App;
