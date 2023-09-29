import React from 'react';
import Styles from './Title.module.css';
import { dot, isotipo, logotipo } from '../../../assets';

const Title = ({ select, color }) => {
  console.log(color);
  return (
    <>
      <div className={select ? Styles.isotipoContainer : ''}>
        <img src={isotipo} alt='' className={Styles.isotipo} />
      </div>
      <div className={Styles.titleContainer}>
        <img src={logotipo} alt='' className={Styles.title} />
        {/* <h1 className={Styles.title} style={{ color: color }}>
          ANÉCDOTA
        </h1> */}
      </div>
      <div className={Styles.dotContainer}>
        <img
          src={dot}
          alt=''
          style={{
            width: '200px',
          }}
        />
      </div>
    </>
  );
};

export default Title;
