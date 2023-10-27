import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Exercise1 from './exercises/ex1.jsx';
import Exercise2 from './exercises/ex2.jsx';
import Exercise3 from './exercises/ex3.jsx';
import Exercise4 from './exercises/ex4.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/ex1',
    element: <Exercise1 />,
  },
  {
    path: '/ex2',
    element: <Exercise2 />,
  },
  {
    path: '/ex3',
    element: <Exercise3 />,
  },
  {
    path: '/ex4',
    element: <Exercise4 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
