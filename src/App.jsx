import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Searchbar from './components/Searchbar';
import SearchPage from './components/SearchPage';
import TopArtists from './components/TopArtists';
import NewReleases from './components/NewReleases';
import TopCharts from './components/TopCharts';
import Playlist from './components/Playlist';
import Singin from './components/Signin';
import Singup from './components/Signup';

function App() {
  const { activeSong } = useSelector((state) => state.player);
  return (
    <Router>
      {/* <Navbar /> */}
      <Searchbar />

      <main>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-release" element={<NewReleases />} />
          <Route path="/search/:term" element={<SearchPage />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/signin" element={<Singin />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </main>
      {activeSong?.title && (
        <div className="SongBarHome">
          <MusicPlayer />
        </div>
      )}
      <Footer />
    </Router>
  );
}

export default App;
