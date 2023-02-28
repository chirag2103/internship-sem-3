import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import '../css/Navbar.css';
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className="search">
          <a href="#">Search</a>
        </li>
        <li className="sign-in">
          <a href="#">Sign In</a>
        </li>
        <li className="sign-up">
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}
