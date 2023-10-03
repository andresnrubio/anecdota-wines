import React, { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';
import { malbec_bg, blend_bg, cabernet_franc_bg, dot } from '../../assets';
import SideBar from '../SideBar/SideBar';
import wines from '../../data/winesData.json';
import Title from '../common/Title/Title';

const HeroSection = ({ inactive }) => {
  const [isSelected, setIsSelected] = useState('main');
  const [selectedOption, setSelectedOption] = useState({});
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();

  useEffect(() => {
    if (isSelected !== 'main') {
      setSideBarOpen(true);
      let selectorID = 0;
      switch (isSelected) {
        case 'one':
          selectorID = 1;
          break;
        case 'two':
          selectorID = 2;

          break;
        case 'three':
          selectorID = 3;

          break;

        default:
          break;
      }
      setSelectedOption(wines.find((option) => option.id === selectorID));
    }
  }, [isSelected]);

  const changeSelectedOption = (newOptionId) => {
    if (newOptionId) {
      switch (selectedOption.id) {
        case 1:
          setIsSelected('one');
          break;
        case 2:
          setIsSelected('two');
          break;
        case 3:
          setIsSelected('three');
          break;
        default:
          break;
      }
      setSelectedOption(wines.find((option) => option.id === newOptionId));
    }
  };
  const reOrder = (optionName) => {
    if (optionName === isSelected) {
      switch (optionName) {
        case 'one':
          return '0';
        case 'two':
          return '-100%';
        case 'three':
          return '-200%';
        default:
          break;
      }
    }
  };
  useEffect(() => {
    setOne(reOrder('one'));
    setTwo(reOrder('two'));
    setThree(reOrder('three'));
  }, [isSelected]);

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1>Hola</h1>
        </div>
      </div>
    </>
  );
  // return (
  //   <div
  //     className={styles.container}
  //     style={{ pointerEvents: inactive ? 'none' : null }}
  //   >
  //     {/* <Title
  //       select={Object.keys(selectedOption).length > 0}
  //       color={selectedOption ? selectedOption.fontColor : ''}
  //     /> */}
  //     <div style={{ display: 'flex', width: '100%' }}>
  //       <div
  //         style={{
  //           left: `${one}`,
  //         }}
  //         className={`   ${styles.panelOne}     ${
  //           isSelected !== 'main' ? styles.panelNoMain : styles.panel
  //         }
  //         `}
  //         onClick={() => setIsSelected('one')}
  //       >
  //         <div
  //           className={`${
  //             isSelected === 'main' ? styles.mask : styles.maskSelected
  //           }`}
  //         >
  //           <img
  //             src={malbec_bg}
  //             alt=''
  //             className={`        ${
  //               isSelected !== 'main' ? styles.fondoNoMain : styles.fondo
  //             }`}
  //           />
  //         </div>
  //       </div>
  //       <div
  //         style={{
  //           left: `${isSelected === 'main' ? 'none' : reOrder('two')}`,
  //         }}
  //         className={`  ${styles.panelTwo}      ${
  //           isSelected !== 'main' ? styles.panelNoMain : styles.panel
  //         }

  //       }`}
  //         onClick={() => setIsSelected('two')}
  //       >
  //         <div
  //           className={`${
  //             isSelected === 'main' ? styles.mask : styles.maskSelected
  //           }`}
  //         >
  //           <img
  //             src={blend_bg}
  //             alt=''
  //             style={{
  //               // padding: isSelected !== 'main' ? '0' : '5% 0',
  //               height: '100%',
  //             }}
  //           />
  //         </div>
  //       </div>
  //       <div
  //         style={{
  //           left: `${isSelected === 'main' ? 'none' : reOrder('three')}`,
  //         }}
  //         className={`
  //         ${styles.panelThree}
  //                ${isSelected !== 'main' ? styles.panelNoMain : styles.panel}
  //         `}
  //         onClick={() => setIsSelected('three')}
  //       >
  //         <div
  //         // className={`${
  //         //   isSelected === 'main' ? styles.mask : styles.maskSelected
  //         // }`}
  //         >
  //           <img
  //             src={cabernet_franc_bg}
  //             alt=''
  //             style={{
  //               // padding: isSelected !== 'main' ? '0' : '5% 0',
  //               height: '100%',
  //             }}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //     <img
  //       src={dot}
  //       alt=''
  //       style={{
  //         position: 'absolute',
  //         zIndex: 100,
  //         width: 'calc(100vw / 10)',
  //         height: 'calc(100vw / 10)',
  //         minHeight: '120px',
  //         minWidth: '120px',
  //         maxWidth: '230px',
  //         maxHeight: '230px',
  //         top: '55%',
  //         left: '45%',
  //       }}
  //     />
  //   </div>
  // );
};

export default HeroSection;
