// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// export default function Home() {
//   return (
//     <section className="home">
//       {/* Welcome Message */}
//       <h1>Welcome to My Portfolio</h1>
//       <p>
//         I’m Adewale Ibrahim, a passionate developer and problem-solver.  
//         My mission is to create meaningful, user-friendly digital solutions 
//         that make a difference. Explore my portfolio to learn more about me, 
//         my projects, and the services I offer.
//       </p>

//       {/* Button to About Page */}
//       <Link to="/about" className="btn">
//         Learn More About Me
//       </Link>
//     </section>
//   );
// }



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