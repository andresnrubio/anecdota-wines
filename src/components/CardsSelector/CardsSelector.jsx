import React, { useEffect, useState } from 'react';
import styles from './CardsSelector.module.css';
import { malbec_bg, blend_bg, cabernet_franc_bg, dot } from '../../assets';
import SideBar from '../SideBar/SideBar';
import wines from '../../data/winesData.json';
import Title from '../common/Title/Title';
import {
  bg1024px,
  bg1280px,
  bg1440px,
  bg1920px,
  bg768px,
} from '../../assets/backgroundIndex';

const CardsSelector = ({ inactive }) => {
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
    <div
      className={styles.container}
      style={{ pointerEvents: inactive ? 'none' : null }}
    >
      {/* <p
        style={{
          fontFamily: 'Futura Book',
          fontSize: '65px',
          color: '#fff1d8',
          letterSpacing: '10px',
          position: 'absolute',
          zIndex: 3,
          margin: 'auto',
          textShadow: '1px 1px 3px #816d70e6',
          width: '100%',
          top: '45%',
        }}
      >
        ANÉCDOTA
      </p> */}
      {/* <Title
        select={Object.keys(selectedOption).length > 0}
        color={selectedOption ? selectedOption.fontColor : ''}
      /> */}
      {/* <div style={{ display: 'flex', width: '100%' }}>
        <div
          style={{
            left: `${one}`,
          }}
          className={`   ${styles.panelOne}     ${
            isSelected !== 'main' ? styles.panelNoMain : styles.panel
          }
          `}
          // onClick={() => setIsSelected('one')}
        >
          <div
            className={`${
              isSelected === 'main' ? styles.mask : styles.maskSelected
            }`}
          >
            <img
              src={malbec_bg}
              alt=''
              className={`        ${
                isSelected !== 'main' ? styles.fondoNoMain : styles.fondo
              }`}
            />
          </div>
        </div>
        <div
          style={{
            left: `${isSelected === 'main' ? 'none' : reOrder('two')}`,
          }}
          className={`  ${styles.panelTwo}      ${
            isSelected !== 'main' ? styles.panelNoMain : styles.panel
          }
          
        }`}
          // onClick={() => setIsSelected('two')}
        >
          <div
            className={`${
              isSelected === 'main' ? styles.mask : styles.maskSelected
            }`}
          >
            <img
              src={blend_bg}
              alt=''
              style={{
                // padding: isSelected !== 'main' ? '0' : '5% 0',
                height: '100%',
              }}
            />
          </div>
        </div>
        <div
          style={{
            left: `${isSelected === 'main' ? 'none' : reOrder('three')}`,
          }}
          className={`
          ${styles.panelThree}
                 ${isSelected !== 'main' ? styles.panelNoMain : styles.panel}
          `}
          // onClick={() => setIsSelected('three')}
        >
          <div
          // className={`${
          //   isSelected === 'main' ? styles.mask : styles.maskSelected
          // }`}
          >
            <img
              src={cabernet_franc_bg}
              alt=''
              style={{
                // padding: isSelected !== 'main' ? '0' : '5% 0',
                height: '100%',
              }}
            />
          </div>
        </div>
      </div> */}
      {/* {Object.keys(selectedOption).length > 0 ? ( */}

      <div style={{ display: 'flex', width: '100%' }}>
        {/* <img src={bg1920px} alt='bg' /> */}
        <picture
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <source media='(min-width: 1920px)' srcset={bg1920px} sizes='' />
          <source media='(min-width: 1440px)' srcset={bg1440px} sizes='' />
          <source media='(min-width: 1280px)' srcset={bg1280px} sizes='' />
          <source media='(min-width: 1024px)' srcset={bg1024px} sizes='' />
          <source media='(min-width: 768px )' srcset={bg768px} sizes='' />

          <img src={bg1920px} alt='bg' />
        </picture>
      </div>
      {/* <SideBar
        toggleState={sideBarOpen}
        options={wines}
        selectedOption={selectedOption}
        selectionFunction={changeSelectedOption}
      /> */}
      {/* ) : null} */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          position: 'absolute',
          width: '100%',
          // height: '100%',
          height: 'calc(100vh - 200px)',
          minHeight: '408px',
          maxHeight: 'calc(1440px / 1.778)',
          margin: 'auto',
          // top: '45%',
          // right: '35%',
          // gap: '150px',
        }}
      >
        <p
          style={{
            fontFamily: 'Futura Book, Jost',
            fontSize: '500%',
            color: '#fff1d8',
            letterSpacing: '10px',
            // position: 'absolute',
            zIndex: 10,
            marginLeft: '2%',
            // margin: '-5% 0 0 0 ',
            textShadow: 'rgb(0 0 0 / 90%) 1px 2px 3px',
            width: '100%',
            height: '65px',
          }}
        >
          ANÉCDOTA
        </p>
        <img
          src={dot}
          alt=''
          style={{
            // position: 'absolute',
            zIndex: 9,
            width: 'calc(100vw / 12.5)',
            height: 'calc(100vw / 12.5)',
            margin: '0 6.5% 0 0 ',
            minHeight: '120px',
            minWidth: '120px',
            maxWidth: '230px',
            maxHeight: '230px',
            display: 'none',
            // top: '60%',
            // left: '45%',
          }}
        />
        <a
          className={styles.button}
          role='button'
          // style={{
          //   all: 'unset',
          //   position: 'absolute',
          //   width: '180px',
          //   height: '60px',
          //   borderColor: 'white',
          //   border: '1px solid white',
          //   color: 'white',
          //   filter: 'blur 10px',
          //   zIndex: '10',
          // }}
          href='https://anecdotawines.mercadoshops.com.ar/'
          target='blank'
        >
          Ir a tienda
        </a>
      </div>
      {/* <img
        src={dot}
        alt=''
        style={{
          position: 'absolute',
          zIndex: 9,
          width: 'calc(100vw / 12.5)',
          height: 'calc(100vw / 12.5)',
          minHeight: '120px',
          minWidth: '120px',
          maxWidth: '230px',
          maxHeight: '230px',
          top: '60%',
          left: '45%',
        }}
      /> */}
    </div>
  );
};

export default CardsSelector;
