import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';  // Put your logo image in src/assets
import './Navbar.css';  // Import CSS file

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Me' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact Me' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo + Name */}
        <div className="logo-container">
          {/* Image Logo */}
          <img src={logo} alt="Logo" className="logo-img" />

          {/* OR Initials Logo (uncomment to use) */}
          {/* <div className="logo-initials">WB</div> */}

          <div className="logo-text">Your Name</div>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn">
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="mobile-nav">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`nav-link ${pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}