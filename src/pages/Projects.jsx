import './Project.css';
import project1 from '../assets/projects/project1.jpg';
import project2 from '../assets/projects/project2.jpg';
import project3 from '../assets/projects/project3.jpg';

export default function Projects() {
  const projects = [
    {
      title: "Auto Sales Website",
      image: project1,
      description: "Designed and developed a responsive, user-focused auto sales website showcasing available inventory with detailed listings for each vehicle"
    },
    {
      title: "SRS Documentation - Smart Fitness App",
      image: project2,
      description: "Collaborated with an Agile team to produce a clear and comprehensive SRS document for the Smart Fitness App, ensuring alignment between user needs, functional requirements, and development goals"
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