import { useNavigate } from 'react-router-dom';
import '../css/ArtistCard.css';
const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="ArtistCard"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img alt="song_img" src={track?.images?.coverart} />
      <p>{track?.subtitle}</p>
    </div>
  );
};
export default ArtistCard;
