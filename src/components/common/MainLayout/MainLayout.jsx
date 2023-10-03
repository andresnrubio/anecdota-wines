import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import WineDescription from '../../WineDescription/WineDescription';

const MainLayout = () => {
  return <Outlet />;
};
export default MainLayout;
