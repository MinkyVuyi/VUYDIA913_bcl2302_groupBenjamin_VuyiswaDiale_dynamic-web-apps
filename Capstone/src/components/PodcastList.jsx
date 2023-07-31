// src/components/PodcastList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    // Fetch data from the external API
    axios.get("https://podcast-api.netlify.app/shows").then((response) => {
      setPodcasts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>All Podcasts</h1>
      <ul>
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <a href={`/podcast/${podcast.id}`}>{podcast.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
