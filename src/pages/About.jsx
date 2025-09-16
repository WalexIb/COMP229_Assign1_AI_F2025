import './About.css';
import profileImage from '../assets/profile.jpg'; // Add your head-and-shoulders image here

export default function About() {
  return (
    <div className="about-container">
      <h1>Adewale Ibrahim</h1>
      <img src={profileImage} alt="Adewale Ibrahim" className="profile-image" />
      <p>
        I am a motivated student currently studying <strong>Software Engineering Technology – AI</strong>. 
        I am passionate about developing innovative software solutions and exploring the possibilities of 
        artificial intelligence. I enjoy learning new technologies, building projects, and applying 
        practical skills to solve real-world problems.
      </p>
    </div>
  );
}