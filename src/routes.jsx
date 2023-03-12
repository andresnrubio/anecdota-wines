import React from 'react';
import { Navigate } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainLayout from './components/common/MainLayout/MainLayout';
import { Home, ErrorPage } from './pages/pagesIndex';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Navigate to='/home' /> },
      { path: '*', element: <Navigate to='/home' /> },
      { path: 'home', element: <Home /> },
    ],
  },
]);

export default router;
