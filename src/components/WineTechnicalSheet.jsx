import React from 'react';
import WineFactors from './WineFactors/WineFactors';
import WineComposition from './WineComposition/WineComposition';
import malbec from '../malbec2021.json';

const WineTechnicalSheet = (wineDetails) => {
  return (
    <div className='technicalSheetContainer'>
      <div className='details'>
        <h1>POR LA ANÉCDOTA</h1>
        <h2>{malbec.name.toUpperCase()}</h2>
        <h3>ALTO UGARTECHE, LUJÁN DE CUYO</h3>
        <span>MENDOZA, ARGENTINA</span>
        <h2>{malbec.year}</h2>
      </div>
      <div className='details'>
        <WineComposition
          composition={malbec.composition}
          alcohol={malbec.alcohol}
          acidity={malbec.acidity}
          sugar={malbec.sugar}
          harvest={malbec.harvest}
          oak={malbec.oak}
          stored={malbec.stored}
        />
      </div>
      <div className='details'>
        <h2>TERROIR</h2>
        <p>
          Alto ugarteche, en Lujan de Cuyo, zona con muy buena amplitud térmica,
          posee un clima árido, suelos aluvionales, regado con agua pura de la
          cordillera. Altura promedio de 1000msnm y suelos arcillosos.
        </p>
      </div>
      <div className='bottleImg'></div>
    </div>
  );
};

export default WineTechnicalSheet;
