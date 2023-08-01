import React, { useState, useEffect } from 'react';

const AudioPlayer = ({ episode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = React.createRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPauseClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (event) => {
    const seekTime = event.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className="audio-player">
      <h2>Audio Player</h2>
      <audio ref={audioRef} src={episode.audioUrl} onTimeUpdate={handleTimeUpdate} />

      <div className="controls">
        <button onClick={handlePlayPauseClick}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className="time">
          <span>{formatTime(currentTime)}</span> / <span>{formatTime(episode.duration)}</span>
        </div>
        <input
          type="range"
          min="0"
          max={episode.duration}
          value={currentTime}
          onChange={handleSeek}
        />
      </div>
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default AudioPlayer;
