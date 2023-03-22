import {
  color_icon,
  thermometer_icon,
  cabernet_fruit_icon,
} from '../../assets';

import { useState } from 'react';

const WineVarietals = () => {
  const [icons, setIcons] = useState([
    { route: color_icon, text: 'COLOR BORDEAUX' },
    { route: thermometer_icon, text: '16/18°C' },
    { route: cabernet_fruit_icon, text: 'CABERNET SAUVIGNON' },
  ]);

  const wineVarietals = icons.map((icon, index) => (
    <div key={index}>
      <img src={icon.route} alt={`Imagen ${index + 1}`} />
      <p>{icon.text}</p>
    </div>
  ));

  return <div>{wineVarietals}</div>;
};

export default WineVarietals;
