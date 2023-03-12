import React from 'react';
import styles from './CardsSelector.module.css';

const CardsSelector = () => {
  // const panels = document.querySelectorAll('.panel')

  // panels.forEach(panel => {
  //     panel.addEventListener('click', () => {
  //         removeActiveClasses()
  //         panel.classList.add('active')
  //     })
  // })

  // function removeActiveClasses() {
  //     panels.forEach(panel => {
  //         panel.classList.remove('active')
  //     })
  // }
  return (
    <div classname={styles.container}>
      <div>
        <h3>Explore The World</h3>
      </div>
      <div classname={styles.panel}>
        <h3>Wild Forest</h3>
      </div>
      <div classname={styles.panel}>
        <h3>Sunny Beach</h3>
      </div>
      <div classname={styles.panel}>
        <h3>City on Winter</h3>
      </div>
      <div classname={styles.panel}>
        <h3>Mountains - Clouds</h3>
      </div>
    </div>
  );
};

export default CardsSelector;
