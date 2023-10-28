import styles from './WineVarietals.module.css';
import {
  color_icon,
  thermometer_icon,
  cabernet_fruit_icon,
  malbec_fruit_icon,
  bonarda_fruit_icon,
  cabernet_franc_fruit_icon,
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
      case 'COLOR RUBY':
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
      case 'BONARDA':
        return bonarda_fruit_icon;
      case 'CABERNET FRANC':
        return cabernet_franc_fruit_icon;

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

  const wineVarietals = icons.map((icon, index) => {
    if (icon.route) {
      return (
        <div key={index} className={styles.contenedorVarietals}>
          <img src={icon.route} alt={`Imagen ${index + 1}`} />
          <p>{icon.text}</p>
        </div>
      );
    }
  });

  return (
    <div className={styles.varietalDescriptionContainer}>{wineVarietals}</div>
  );
};

export default WineVarietals;
