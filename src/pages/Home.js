import React from 'react';
import '../styles/Home.css';
import Picture from '../assets/Picture.jpg';

const images = [
  Picture,
  Picture,
  Picture,
  Picture,
  Picture,
]; // Add more images as needed

const Home = () => {
  // Duplicate images to ensure seamless infinite scrolling
  const duplicatedImages = [...images, ...images, ...images]; // Tripled for smoother animation

  return (
    <section id="home" className="home">
      <div className="carousel">
        <div className="carousel-track">
          {duplicatedImages.map((img, index) => (
            <div key={index} className="carousel-item">
              <img
                src={img}
                alt={`Highlight ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="overlay">
        <div className="hero-section">
          <h1>Coleman Strange</h1>
          <p>
            Welcome to my football highlight portfolio. Explore my journey, dedication, and the moments that define my passion for the game.
          </p>
          <a href="/highlights" className="portfolio-link">View Highlights</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
