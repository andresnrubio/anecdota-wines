import React from 'react';
import styles from './WineTechnicalSheet.module.css';
import WineVarietals from '../WineVarietals/WineVarietals';
import WineComposition from '../WineComposition/WineComposition';
import WineDescription from '../WineDescription/WineDescription';
import WineAroma from '../WineAromas/WineAroma';
import WineTechnicalTitle from '../WineTechnicalTitle/WineTechnicalTitle';
import WineTerroir from '../WineTerroir/WineTerroir';
import WineCompositionBars from '../WineCompositionBars/WineCompositionBars';
import {
  bottle_blend,
  bottle_cabernet,
  bottle_malbec,
  map_arg,
  map_mendoza,
  topografico,
} from '../../assets';

const WineTechnicalSheet = ({ wineDetails }) => {
  const handleImage = (name) => {
    if (wineDetails) {
      switch (name) {
        case 'bottle_blend':
          return bottle_blend;
        case 'bottle_cabernet':
          return bottle_cabernet;
        case 'bottle_malbec':
          return bottle_malbec;

        default:
          break;
      }
    } else {
      return undefined;
    }
  };
  return (
    <>
      <div className={styles.technicalSheetContainer}>
        <section className={styles.wineComposition}>
          <div className={styles.title}>
            <WineTechnicalTitle detail={wineDetails ? wineDetails : ''} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <div className={styles.detail}>
              <WineComposition detail={wineDetails ? wineDetails : ''} />

              <WineTerroir detail={wineDetails ? wineDetails : ''} />
            </div>
            <div className={styles.maps}>
              <img src={map_mendoza} />
              <img src={map_arg} />
            </div>
          </div>
        </section>

        <section className={styles.wineDescription}>
          <WineVarietals detail={wineDetails ? wineDetails : ''} />

          <WineCompositionBars detail={wineDetails ? wineDetails : ''} />

          <WineDescription detail={wineDetails ? wineDetails : ''} />

          <WineAroma detail={wineDetails ? wineDetails : ''} />
        </section>
        <div className={styles.bottleImg}>
          <img src={handleImage(wineDetails.bottleImage)} alt='' />
        </div>
      </div>
      <div style={{ height: '100px', background: '#1e1e1e', width: '100%' }} />
    </>
  );
};

export default WineTechnicalSheet;
