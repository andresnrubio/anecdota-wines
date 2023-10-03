import React, { useEffect, useState } from 'react';
import styles from './SideBar.module.css';
import { clearConfigCache } from 'prettier';
import { blend_bg, malbec_bg } from '../../assets';

const SideBar = ({
  toggleState,
  selectedOption,
  options,
  selectionFunction,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOptions, setSidebarOptions] = useState([]);
  const [selected, setSelected] = useState({});
  const [selectedItem, setSelectedItem] = useState();

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // useEffect(() => {
  //   console.log(options);
  // }, [options]);

  const moveItemToFront = (item) => {
    const index = sidebarOptions.indexOf(item);
    const newItems = [...sidebarOptions];
    newItems.splice(index, 1);
    newItems.unshift(item);
    setSelectedItem(item);
  };

  useEffect(() => {
    if (selectedOption) {
      setSelected(selectedOption);
    }
  }, []);

  // console.log(malbec_bg);
  useEffect(() => {
    moveItemToFront(selected);
  }, [selected]);

  useEffect(() => {
    if (toggleState) {
      setIsOpen(toggleState);
    }
  }, [toggleState]);

  useEffect(() => {
    if (options && Object.keys(selected).length > 0) {
      let newArray = options.filter((option) => {
        return option.id !== selected.id;
      });
      newArray.unshift(selected);
      setSidebarOptions(newArray);
      // let newArray = options;
      setSidebarOptions(newArray);
      setSelectedItem(newArray[0]);
    }
  }, [selected]);

  const selectedStyle = (option) => {
    if (selectedItem.id === option.id) {
      return styles.optionSelected;
    } else {
      return styles.option;
    }
  };

  return (
    <div className={styles.sidebarContainer}>
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
      >
        {sidebarOptions
          ? sidebarOptions.map((option) => (
              <button
                key={option.id}
                id={option.id}
                // className={styles.option}
                style={{
                  backgroundImage: `url("  ${option.img}  ")`,
                  backgroundPosition: 'right',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  borderLeft: `${option.fontColor} 2px solid`,
                  color: `${option.fontColor}`,
                }}
                className={`${selectedStyle(option)}`}
                type='button'
                onClick={() => {
                  setSelected(option);
                  selectionFunction(option.id);
                }}
              >
                {/* <div
                  style={{

                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    opacity: 1,
                  }}
                /> */}
                <div
                  style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      height: '15%',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <p
                      style={{
                        transform: 'rotate(90deg)',
                      }}
                      className={styles.year}
                    >
                      {`${option.year}`.toUpperCase()}
                    </p>
                  </div>
                  <div
                    style={{
                      height: '50%',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <p
                      style={{
                        transform: 'rotate(90deg)',
                      }}
                      className={styles.title}
                    >
                      {`${option.name}`.toUpperCase()}
                    </p>
                  </div>
                  <div
                    style={{
                      height: '15%',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        transform: 'rotate(90deg)',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <p
                        className={styles.subtitle}
                        style={{ marginBottom: '-0.25rem' }}
                      >
                        {`${option.province}`.toUpperCase()}
                      </p>
                      <p className={styles.subtitleTwo}>
                        {`${option.country}`.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            ))
          : null}
      </div>
    </div>
  );
};

export default SideBar;
