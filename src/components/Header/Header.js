// src/components/Header/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">ERGETE KAGNEWU</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;