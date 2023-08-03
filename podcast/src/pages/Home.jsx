import React, { useEffect } from "react";

export default function Home() {
  const [showPodcast, setPodcast] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Fetch all show data from the API
    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((data) => {
        setPodcast(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching show data:', error);
        setLoading(false);
      });
  }, []);

  const genreData = {
    1: 'Personal Growth',
    2: 'True Crime and Investigative Journalism',
    3: 'History',
    4: 'Comedy',
    5: 'Entertainment',
    6: 'Business',
    7: 'Fiction',
    8: 'News',
    9: 'Kids and Family',
  };

  const getGenres = (genreIds) => {
    if (Array.isArray(genreIds)) {
      return genreIds.map((id) => genreData[id]).join(', ');
    } else {
      return genreData[genreIds];
    }
  };

  return (
    <div className="home-container">
      <h1>All Shows</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {showPodcast.map((show) => (
            <div key={show.id} className="col-md-4 mb-4">
              <a href={`/show/${show.id}`} className="show-link">
                <div className="card h-100 shadow">
                  <img src={show.image} className="card-img-top" alt={show.title} />
                  <div className="card-body">
                    <h3 className="card-title">{show.title}</h3>
                    <p className="card-text">{show.description}</p>
                    <p>Genre: {getGenres(show.genres)}</p>
                    <p>Numbers of seasons: {show.seasons}</p>
                    <p>Updated: {show.updated}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
