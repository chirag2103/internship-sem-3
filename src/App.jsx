import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  const { activeSong } = useSelector((state) => state.player);
  return (
    <Router>
      <Navbar />
      <main>
        <Sidebar />
        <Home />
      </main>
      {activeSong?.title && (
        <div className="SongBarHome">
          <MusicPlayer />
        </div>
      )}
      <Footer />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
