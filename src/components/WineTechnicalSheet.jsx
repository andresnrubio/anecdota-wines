import React from 'react';
import styles from './WineTechnicalSheet.module.css';
import WineVarietals from './WineVarietals/WineVarietals';
import WineComposition from './WineComposition/WineComposition';
import WineDescription from './WineDescription/WineDescription';
import malbec from '../malbec2021.json';
import WineAroma from './WineAromas/WineAroma';
import WineTechnicalTitle from './WineTechnicalTitle/WineTechnicalTitle';
import WineTerroir from './WineTerroir/WineTerroir';

const WineTechnicalSheet = (wineDetails) => {
  return (
    <div className={styles.technicalSheetContainer}>
      <section className={styles.textInformation}>
        <div className='details'>
          <WineTechnicalTitle malbec={malbec} />
        </div>
        <div className='details'>
          <WineComposition malbec={malbec} />
        </div>
        <div className='details'>
          <WineTerroir />
        </div>
      </section>
      <section>
        <div className='details'>
          <WineVarietals />
        </div>
        <div className='details'>
          <WineDescription />
        </div>
        <div className='details'>
          <WineAroma />
        </div>
      </section>
      <div className='bottleImg'></div>
    </div>
  );
};

export default WineTechnicalSheet;
