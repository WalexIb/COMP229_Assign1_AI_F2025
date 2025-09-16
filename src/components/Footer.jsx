import React from 'react';
import './Footer.css'; // Import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>© {new Date().getFullYear()} Adewale Ibrahim</div>
        <div className="footer-links">
          <a href="https://github.com/WalexIb">GitHub</a>
          <a href="https://linkedin.com/in/engr-adewale-ibrahim">LinkedIn</a>
          <a href="https://x.com/Dewaleibrahim">Twitter</a>
        </div>
      </div>
    </footer>
  );
}