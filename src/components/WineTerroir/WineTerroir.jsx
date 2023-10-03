import styles from './WineTerroir.module.css';

const WineTerroir = () => {
  return (
    <div style={{ width: ' calc(100% + 100px)', marginTop: '1rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>TERROIR</h2>
      <p className={styles.terroirDescription}>
        Alto ugarteche, en Lujan de Cuyo, zona con muy buena amplitud térmica,
        posee un clima árido, suelos aluvionales, regado con agua pura de la
        cordillera. Altura promedio de 1000msnm y suelos arcillosos.
      </p>
    </div>
  );
};

export default WineTerroir;
