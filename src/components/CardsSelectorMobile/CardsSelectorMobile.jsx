import React, {useState} from 'react'
import styles from './CardsSelectorMobile.module.css'
import { malbec_bg, blend_bg, cabernet_franc_bg} from '../../assets'
const CardsSelectorMobile = () => {
const [isSelected, setisSelected] = useState('malbec')

const handleClick = (selectVar) => {
    setisSelected(selectVar)
}

  return (
    <div className={styles.CardsSelectorMobileContainer}>
        <div className={`${styles.frontCard} ${isSelected === 'malbec' ? styles.selected : ''}`} onClick={()=>handleClick('malbec')}>
            <div className={`${styles.background} ${styles.malbec}`} style={{backgroundImage: `url(${malbec_bg})`}}>
                <div className={styles.title}>
                    <p>2021</p>
                    <h3>Malbec</h3> 
                    <div className={styles.region}>  
                        <h4>Mendoza</h4>
                        <p>Argentina</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.frontCard} ${isSelected === 'blend' ? styles.selected : ''}`} onClick={()=>handleClick('blend')}>
            <div className={styles.background} style={{backgroundImage: `url(${blend_bg})`}}>
            <div className={styles.title}>
                    <p>2021</p>
                    <h3>Blend</h3> 
                    <div className={styles.region}>  
                        <h4>Mendoza</h4>
                        <p>Argentina</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.frontCard} ${isSelected === 'cabernetFranc' ? styles.selected : ''}`} onClick={()=>handleClick('cabernetFranc')}>
            <div className={styles.background} style={{backgroundImage: `url(${cabernet_franc_bg})`}}>                <div className={styles.title}>
                    <p>2021</p>
                    <h3>Cabernet Franc</h3> 
                    <div className={styles.region}>  
                        <h4>Mendoza</h4>
                        <p>Argentina</p>
                    </div>
                </div></div>
        </div>
    </div>
  )
}

export default CardsSelectorMobile