import { color_icon, thermometer, cabernet } from '../../assets';

import React, { useState } from 'react';

const WineVarietals = () => {
  const [icons, setIcons] = useState([
    { route: color_icon, text: 'COLOR BORDEAUX' },
    { route: thermometer, text: '16/18°C' },
    { route: cabernet, text: 'CABERNET SAUVIGNON' },
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
