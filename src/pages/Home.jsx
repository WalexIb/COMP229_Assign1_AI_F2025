
/* File: Home.jsx
   Student: Adewale Ibrahim
   StudentID: 301515732
   Date: 2025-09-15
*/

/* Import necessary modules and assets */
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>My mission is to create impactful web applications and showcase my skills.</p>
      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </div>
  );
}