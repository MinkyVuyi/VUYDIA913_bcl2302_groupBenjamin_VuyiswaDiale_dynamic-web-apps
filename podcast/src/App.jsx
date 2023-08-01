import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import Carousel from './components/Carousel';
import EpisodeList from './components/EpisodeList';
import EpisodeListItem from './components/EpisodeListItem';
import Favorites from './components/Favorites';
import FilterInput from './components/FilterInput';
import GenreFilter from './components/GenreFilter';
import ShowList from './components/ShowList';
import ShowListItem from './components/ShowListItem';
import ShowSeasonListItem from './components/ShowSeasonListItem';
import ShowSeasons from './components/ShowSeasons';
import FuzzySearch from '../utilis/FuzzySearch'

const App = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState([]);
  
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
      <Carousel />
      <FilterInput />
      <GenreFilter />
      <FuzzySearch items={podcasts.map((show) => show.title)} />
      <FuzzySearch items={episodes.map((episode) => episode.title)} />
      <EpisodeList episodes={episodes} />
      <FuzzySearch items={seasons.map((seasons) => seasons.title)} />
          
      <EpisodeList episodes={seasons} />
      <ShowList>
        {podcasts.map((show) => (
          <ShowListItem key={show.id} show={show} />
        ))}
      </ShowList>
      {currentEpisode && (
        <div>
          <h2>Now Playing: {currentEpisode.title}</h2>
          <AudioPlayer
            episode={currentEpisode}
            isPlaying={isPlaying}
            handlePlayPause={handlePlayPause}
          />
        </div>
      )}
      <EpisodeList>
        {renderEpisodes(episodes)}
      </EpisodeList>
      <Favorites
      favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onRemoveFavorite={removeFavorite}
      />
      <ShowSeasons>
        {renderShowSeasons(ShowSeasons)}
      </ShowSeasons>
      <ShowSeasonListItem season={seasonData} />
    </div>
  );
};

export default App;


