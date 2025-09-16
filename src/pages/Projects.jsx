import './Projects.css';
import project1 from '../assets/projects/project1.jpg';
import project2 from '../assets/projects/project2.jpg';
import project3 from '../assets/projects/project3.jpg';

export default function Projects() {
  const projects = [
    {
      title: "Smart Grocery List App",
      image: project1,
      description: "A web app that helps users generate and manage grocery lists automatically using AI. I designed the backend logic and implemented the front-end interface."
    },
    {
      title: "Fitness Tracking App",
      image: project2,
      description: "A mobile app that allows users to track workouts, monitor progress, and stay motivated. I built the user dashboard and integrated real-time analytics."
    },
    {
      title: "Portfolio Website",
      image: project3,
      description: "This personal portfolio site showcases my skills, services, and projects. I designed and coded it using React, CSS, and modern responsive practices."
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}