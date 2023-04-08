import React, { useEffect, useState } from 'react';
import { malbec_bg, blend_bg, cabernet_franc_bg } from '../../assets';
import styles from './CardsSelector.module.css';

const CardsSelector = () => {
  const [isSelected, setIsSelected] = useState('main');

  useEffect(() => {}, [isSelected]);

  // const checkSelected
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
    <div className={styles.container}>
      <div
        className={styles.panel}
        style={{ backgroundImage: `url(${malbec_bg})` }}
        onClick={() => setIsSelected('one')}
      >
        <h3>Explore The World</h3>
      </div>
      <div className={styles.panel}>
        <div
          style={{
            backgroundImage: `url(${blend_bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
          }}
          onClick={() => setIsSelected('two')}
        >
          <h3>Wild Forest</h3>
        </div>
      </div>
      <div
        className={styles.panel}
        style={{ backgroundImage: `url(${cabernet_franc_bg})` }}
        onClick={() => setIsSelected('three')}
      >
        <h3>Sunny Beach</h3>
      </div>
    </div>
  );
};

export default CardsSelector;
