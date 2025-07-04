import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Layout from './layout/layout';
import Test from './test/test';
import HeroHeader from './component/HeroSection';


const routes = createBrowserRouter([{
  element : <Layout/>,
  children : [
    {path : "/" , element : <HeroHeader/>},
    {path : "/test" , element : <Test/>}
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

