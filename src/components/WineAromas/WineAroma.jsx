import styles from './WineAroma.module.css';
import {
  vainilla_icon,
  cherry_icon,
  butter_icon,
  eucalyptus_icon,
  raspberry,
  red_berry,
  cumin,
  black_berry,
  green_bell_pepper,
  liquorice,
  black_pepper,
  dark_chocolate,
} from '../../assets';
import { useState, useEffect } from 'react';

const WineAroma = ({ detail }) => {
  const [icons, setIcons] = useState([
    { route: cherry_icon, text: 'CEREZA' },
    { route: vainilla_icon, text: 'VAINILLA' },
    { route: butter_icon, text: 'MANTECA' },
    { route: eucalyptus_icon, text: 'EUCALIPTO' },
  ]);

  const handleScents = (varietal) => {
    switch (varietal) {
      case 'Cereza':
        return cherry_icon;
      case 'Vainilla':
        return vainilla_icon;
      case 'Manteca':
        return butter_icon;
      case 'Eucalipto':
        return eucalyptus_icon;
      case 'Frambueza':
        return raspberry;
      case 'Chocolate_amargo':
        return dark_chocolate;
      case 'Regaliz':
        return liquorice;
      case 'Pimienta_negra':
        return black_pepper;
      case 'Frutos_rojos':
        return red_berry;
      case 'Comino':
        return cumin;
      case 'Pimiento_verde':
        return green_bell_pepper;
      case 'Frutos_negros':
        return black_berry;
      default:
        break;
    }
  };

  useEffect(() => {
    if (detail) {
      const scents = detail.scent.map((grape) => {
        return { route: handleScents(grape), text: grape };
      });
      setIcons([...scents]);
    }
  }, [detail]);

  const WineAroma = icons.map((icon, index) => (
    <div key={index} className={styles.containerAromaIcons}>
      <img src={icon.route} alt={`Imagen ${index + 1}`} />
      <p>{icon.text.toUpperCase()}</p>
    </div>
  ));

  return (
    <div className={styles.contenedorAroma}>
      <h2 className={styles.aromaTitle}>AROMAS</h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        {WineAroma}
      </div>
    </div>
  );
  D;
};

export default WineAroma;
