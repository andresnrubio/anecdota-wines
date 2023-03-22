import styles from './WineAroma.module.css';
import {
  vainilla_icon,
  cherry_icon,
  butter_icon,
  eucalyptus_icon,
} from '../../assets';
import { useState } from 'react';

const WineAroma = () => {
  const [icons, setIcons] = useState([
    { route: cherry_icon, text: 'CEREZA' },
    { route: vainilla_icon, text: 'VAINILLA' },
    { route: butter_icon, text: 'MANTECA' },
    { route: eucalyptus_icon, text: 'EUCALIPTO' },
  ]);

  const WineAroma = icons.map((icon, index) => (
    <div key={index}>
      <img src={icon.route} alt={`Imagen ${index + 1}`} />
      <p>{icon.text}</p>
    </div>
  ));

  return (
    <div>
      <h2>AROMAS</h2>
      {WineAroma}
    </div>
  );
  D;
};

export default WineAroma;
