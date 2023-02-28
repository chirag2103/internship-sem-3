import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';
import Playlist from './Playlist.jsx';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="active">
          <Link to="/">Discover</Link>
        </li>
        <li className="active">
          <Link to="/new-release">New Releases</Link>
        </li>
        <li>
          <Link to="/top-artists">Top Artists</Link>
        </li>
        <li>
          <Link to="/top-charts">Top Charts</Link>
        </li>
        <li>
          <Link to="/playlists">Playlist</Link>
          <Playlist />
        </li>
      </ul>
      <div className="sidebar-footer">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
