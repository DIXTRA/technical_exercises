import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import LocalizeDate from './exercises/localize_date'
import ObjectMutations from './exercises/obj_mutations';
import AsyncDog from './exercises/async_dog';
import TimeConsumingOperation from './exercises/time_consuming_operation';
import MissingReactivity from './exercises/missing_reactivity';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: "/exercise/localize_date", element: <LocalizeDate /> },
  { path: '/exercise/object_mutations', element: <ObjectMutations /> },
  { path: '/exercise/async_dog', element: <AsyncDog /> },
  { path: '/exercise/time_consuming_operation', element: <TimeConsumingOperation /> },
  { path: '/exercise/missing_reactivity', element: <MissingReactivity /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
