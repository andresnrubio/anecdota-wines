import React, { useEffect, useState } from 'react';
import { malbec_bg, blend_bg, cabernet_franc_bg } from '../../assets';
import styles from './CardsSelector.module.css';

const CardsSelector = () => {
  const [isSelected, setIsSelected] = useState('main');

  useEffect(() => {}, [isSelected]);

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

  // const style = {
  //   panel: {
  //     backgroundColor: isSelected === 'one' ? 'green' : 'red',
  //     color: isSelected ? 'white' : 'black',
  //     border: 'black 1px solid',
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //     backgroundRepeat: 'no-repeat',
  //     color: 'black',
  //     height: '100%',
  //     width: 'calc(100% + 100px)',
  //     cursor: 'pointer',
  //     flex: '0.5',
  //     overflow: 'hidden',
  //     transform: 'skewX(-15deg)',
  //     boxShadow: '20px 0px 20px 5px rgba(0, 0, 0, 0.45)',
  //   },
  // };
  let backgroundColor;

  useEffect(() => {
    switch (isSelected) {
      case 'one':
        backgroundColor = 'red';
        break;
      case 'two':
        backgroundColor = 'blue';
        break;
      case 'three':
        backgroundColor = 'green';
        break;
      default:
        backgroundColor = 'white';
    }
    console.log(backgroundColor);
  }, [isSelected]);

  const style = {
    panel: {
      border: 'black 1px solid',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'black',
      height: '100%',
      width: 'calc(100% + 100px)',
      cursor: 'pointer',
      flex: '0.5',
      overflow: 'hidden',
      transform: 'skewX(-15deg)',
      boxShadow: '20px 0px 20px 5px rgba(0, 0, 0, 0.45)',
    },
    panelOne: {
      // backgroundColor: isSelected === 'one' ? 'red' : 'white',
      backgroundColor: backgroundColor,
      color: isSelected === 'one' ? 'white' : 'black',
    },
    panelTwo: {
      backgroundColor: isSelected === 'two' ? 'green' : 'white',
      color: isSelected === 'two' ? 'white' : 'black',
    },
    panelThree: {
      backgroundColor: isSelected === 'three' ? 'blue' : 'white',
      color: isSelected === 'three' ? 'white' : 'black',
    },
  };

  return (
    <div className={styles.container}>
      <div
        style={Object.assign({}, style.panel, style.panelOne)}
        // style={{ backgroundImage: `url(${malbec_bg})` }}
        onClick={() => setIsSelected('one')}
      >
        <h3>Explore The World</h3>
      </div>
      <div
        style={Object.assign({}, style.panel, style.panelTwo)}
        onClick={() => setIsSelected('two')}
      >
        <div
        // style={
        //   {
        //     // backgroundImage: `url(${blend_bg})`,
        //     // backgroundPosition: 'center',
        //     // backgroundSize: 'cover',
        //     // backgroundRepeat: 'no-repeat',
        //     // width: '100vw',
        //     // height: '100vh'sD_a
        // }
        >
          <h3>Wild Forest</h3>
        </div>
      </div>
      <div
        style={Object.assign({}, style.panel, style.panelThree)}
        // style={{ backgroundImage: `url(${cabernet_franc_bg})` }}
        onClick={() => setIsSelected('three')}
      >
        <h3>Sunny Beach</h3>
      </div>
    </div>
  );
};

export default CardsSelector;
