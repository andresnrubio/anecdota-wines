import React, { useEffect, useState } from 'react';
import styles from './InactiveScreenCarousel.module.css';

const InactiveScreenCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div id='carousel-container'>
      <div
        className={`carousel-card ${currentIndex === 0 ? 'active' : ''}`}
        style={{ backgroundColor: '#ffcc00' }}
      >
        Card 1
      </div>
      <div
        className={`carousel-card ${currentIndex === 1 ? 'active' : ''}`}
        style={{ backgroundColor: '#0099ff' }}
      >
        Card 2
      </div>
      <div
        className={`carousel-card ${currentIndex === 2 ? 'active' : ''}`}
        style={{ backgroundColor: '#33cc33' }}
      >
        Card 3
      </div>
    </div>
  );
};
export default InactiveScreenCarousel;
