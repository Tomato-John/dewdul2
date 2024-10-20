import React from 'react';
import './About.css';
import Footer from './Footer';

function About() {
  return (
    <div className="About">
      <div className="About-content">
        <h2>About Dewdul</h2>
        <p>
          Dewdul is an innovative platform designed to unleash your creativity and connect with fellow artists. 
          Our user-friendly interface allows you to create, share, and explore amazing digital artwork. 
          Whether you're a seasoned professional or just starting your artistic journey, Dewdul provides the tools 
          and community to help you grow and express yourself.
        </p>
        <p>
          Join us today and become part of a vibrant community of creators from around the world!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
