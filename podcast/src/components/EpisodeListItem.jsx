// import React from 'react';

// const EpisodeListItem = ({ episode }) => {
//   return (
//     <div className="episode-list-item">
//       <div>
//         <strong>{episode.title}</strong>
//       </div>
//       <div>Season {episode.season} - Episode {episode.number}</div>
//       <div>{episode.description}</div>
//       {/* You can add more details or UI elements as needed */}
//     </div>
//   );
// };

// export default EpisodeListItem;

import React from 'react';
import EpisodeListItem from './EpisodeListItem';

const EpisodeList = ({ episodes }) => {
  return (
    <div className="episode-list">
      {episodes.map((episode) => (
        <EpisodeListItem key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default EpisodeList;
