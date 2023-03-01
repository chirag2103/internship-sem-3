import { chartstrack as data } from '../data/chartstrack.js';
import '../css/TopArtists.css';
import ArtistCard from './ArtistCard.jsx';
const TopArtists = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2
          style={{
            fontWeight: '600',
            fontSize: '2rem',
            lineHeight: '2rem',
            marginTop: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          Top artists
        </h2>

        <div className="TopArtists">
          {data.tracks?.map((track) => (
            <ArtistCard key={track.key} track={track} />
          ))}
        </div>
      </div>
    </>
  );
};
export default TopArtists;
