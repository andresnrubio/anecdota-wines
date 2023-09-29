import styles from './WineVarietals.module.css';
import {
  color_icon,
  thermometer_icon,
  cabernet_fruit_icon,
  malbec_fruit_icon,
} from '../../assets';

import { useState, useEffect } from 'react';

const WineVarietals = ({ detail }) => {
  const [icons, setIcons] = useState([
    { route: color_icon, text: 'COLOR BORDEAUX' },
    { route: thermometer_icon, text: '16/18°C' },
    { route: malbec_fruit_icon, text: 'MALBEC' },
    { route: cabernet_fruit_icon, text: 'CABERNET SAUVIGNON' },
  ]);
  const handleColor = (colorName) => {
    switch (colorName) {
      case 'COLOR BORDEAUX':
        return color_icon;

      default:
        break;
    }
  };
  const handleVarietals = (varietal) => {
    switch (varietal) {
      case 'MALBEC':
        return malbec_fruit_icon;
      case 'CABERNET SAUVIGNON':
        return cabernet_fruit_icon;

      default:
        break;
    }
  };
  useEffect(() => {
    if (detail) {
      const varietals = detail.grape.map((grape) => {
        return { route: handleVarietals(grape), text: grape };
      });
      setIcons([
        { route: handleColor(detail.color), text: detail.color },
        { route: thermometer_icon, text: detail.temperature },
        ...varietals,
      ]);
    }
  }, [detail]);

  const wineVarietals = icons.map((icon, index) => (
    <div key={index} className={styles.contenedorVarietals}>
      <img src={icon.route} alt={`Imagen ${index + 1}`} />
      <p>{icon.text}</p>
    </div>
  ));

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
      }}
    >
      {wineVarietals}
    </div>
  );
};

export default WineVarietals;