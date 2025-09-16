import './Services.css';
import webdev from '../assets/services/webdev.jpg';
import mobile from '../assets/services/mobile.jpg';
import ai from '../assets/services/ai.jpg';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      image: webdev,
      description: "Building responsive, modern websites using React, HTML, CSS, and JavaScript."
    },
    {
      title: "Mobile App Development",
      image: mobile,
      description: "Designing cross-platform mobile apps with user-friendly interfaces and smooth performance."
    },
    {
      title: "AI & Software Solutions",
      image: ai,
      description: "Creating AI-driven applications, automation tools, and custom software solutions."
    }
  ];

  return (
    <div className="services-container">
      <h1>My Services</h1>
      <p className="services-intro">
        Here are some of the services I offer to help clients bring their ideas to life.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
