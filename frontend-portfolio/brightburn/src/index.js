import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import ShowCase from './pages/ShowCase';
import HomePage from './HomePage/HomePage';


const router = createBrowserRouter([
  {
 element : <MainLayout/>,
 children : [
  { path : "/" , element : <HomePage/> },
  { path : "/show" , element : <ShowCase/> },
],
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
