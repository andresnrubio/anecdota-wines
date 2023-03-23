import React from 'react';
import styles from './WineTechnicalSheet.module.css';
import WineVarietals from './WineVarietals/WineVarietals';
import WineComposition from './WineComposition/WineComposition';
import WineDescription from './WineDescription/WineDescription';
import malbec from '../malbec2021.json';
import WineAroma from './WineAromas/WineAroma';
import WineTechnicalTitle from './WineTechnicalTitle/WineTechnicalTitle';
import WineTerroir from './WineTerroir/WineTerroir';
import WineCompositionBars from './WineCompositionBars/WineCompositionBars';

const WineTechnicalSheet = (wineDetails) => {
  return (
    <div className={styles.technicalSheetContainer}>
      <section className={styles.textInformation}>
        <WineTechnicalTitle malbec={malbec} />

        <WineComposition malbec={malbec} />

        <WineTerroir />
      </section>
      <section>
        <WineVarietals />

        <WineCompositionBars malbec={malbec} />

        <WineDescription />

        <WineAroma />
      </section>
      <div className='bottleImg'></div>
    </div>
  );
};

export default WineTechnicalSheet;
