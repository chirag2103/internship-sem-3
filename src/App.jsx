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
          <Route path="/search/:term" element={<SearchPage />} />
          <Route path="/top-artists" element={<TopArtists />} />
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
