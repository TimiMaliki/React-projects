import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/mainLayout';
import Home from './HomePages/Home';
import TrendingNews from './NewsPages/Trends';
import LatestWorks from './latestWorksPages/latestWork';
import AllWorks from './latestWorksPages/allWorks/allWorks';




const router = createBrowserRouter([
  {
    element: <MainLayout/>, // shared layout or App shell
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <TrendingNews/> },
      { path: "/recents", element: <LatestWorks/> },
      { path: "/allworks", element: <AllWorks/> },
      // other routes...
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

