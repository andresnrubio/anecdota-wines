import styles from './WineTerroir.module.css';
import { topografico } from '../../assets';

const WineTerroir = ({ mobile }) => {
  return (
    <div className={styles.terroirContainer}>
      <h2 className={styles.terroirTitle}>TERROIR</h2>
      <p className={styles.terroirDescription}>
        Alto ugarteche, en Lujan de Cuyo, zona con muy buena amplitud térmica,
        posee un clima árido, suelos aluvionales, regado con agua pura de la
        cordillera. Altura promedio de 1000msnm y suelos arcillosos.
      </p>
      {mobile ? (
        <img src={topografico} alt='topografic' className={styles.topografic} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default WineTerroir;
