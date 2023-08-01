import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/shows/${showId}`);
        const data = await response.json();
        setShow(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching show details:', error);
        setLoading(false);
      }
    };

    fetchShowDetails();
  }, [showId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{show.title}</h2>
      <p>Last Updated: {show.lastUpdated}</p>
      {/* Display show details, seasons, and episodes here */}
    </div>
  );
};

export default ShowDetails;
