import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/css/main.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Marketplace from './pages/Marketplace';
import Ranking from './pages/Ranking';
import Wallet from './pages/Wallet';
import SignUp from './pages/SignUp';

import {
  createBrowserRouter,
  RouterProvider } from 'react-router-dom';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "marketplace",
      element: <Marketplace />
    },
    {
      path: "rankings",
      element: <Ranking />
    },
    {
      path: "wallet",
      element: <Wallet />
    },
    {
      path: "signup",
      element: <SignUp />
    },
    {
      path: "",
      element: <div>404</div>
    },
  ]
  )

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);