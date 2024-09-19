import React from 'react';
import restaurantImg from '../assets/restt.jpg'; // Relative path to the image inside src
import iEducateImg from '../assets/ieducate.jpg';  // Same image for example
import bookstoreImg from '../assets/books.jpg'; // Same image for example


const Projects = () => {
  const projects = [
    {
      title: "Restaurant Website",
      description: "A responsive restaurant website with online reservation functionality.",
      tech: "MERN Stack",
      img: restaurantImg, // Add image path
      link: "https://github.com/your-restaurant-project"
    },
    {
      title: "iEducate Website",
      description: "An educational platform with diverse courses and services.",
      tech: "HTML, CSS, JavaScript",
      img: iEducateImg, // Add image path
      link: "https://github.com/your-ieducate-project"
    },
    {
      title: "Bookstore Website",
      description: "Full-stack e-commerce bookstore application with authentication.",
      tech: "MERN Stack",
      img: bookstoreImg, // Add image path
      link: "https://github.com/your-bookstore-project"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies Used: </strong>{project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
