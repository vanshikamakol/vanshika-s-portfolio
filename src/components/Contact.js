import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn from brands icons

const Contact = () => {
  return (
    <section id="contact" className="container my-5">
      <h2>Contact Me</h2>
      <p>
        <FontAwesomeIcon icon={faPhone} /> +91-8810252625
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:vanshikamakol282@gmail.com">vanshikamakol282@gmail.com</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.linkedin.com/in/vanshikamakol" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
      </p>
    </section>
  );
};

export default Contact;
