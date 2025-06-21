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
import PoliticArticles from './NewsPages/politicsPage/politicsViewMore/politicsmore';
import BlogPoliticsDetails from './NewsPages/politicsPage/politicsViewMoreArticles/politicsArticles';
import CelebrityArticle from './NewsPages/celebrityPage/celebrityViewMore/Celebritymore';
import CelebrityDetails from './NewsPages/celebrityPage/celebrityViewMoreArticles/CelebrityArticles';
import FashionArticle from './NewsPages/fashionPage/fashionViewMore/fashionmore';
import FashionDetail from './NewsPages/fashionPage/fashionViewMoreArticles/fashionArticles';
import HowItWorks from './HowitworksPages/How';
import AuthLayout from './AuthLayout/AuthLayout';
import SignUpPage from './sign/SignUp';
import SignInPage from './sign/SignIn';




const router = createBrowserRouter([
  {
    element: <MainLayout/>, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/how", element: <HowItWorks/> },
      { path: "/recents", element: <LatestWorks/> },
      { path: "/blogs", element: <TrendingNews/> },
      { path: "/allworks", element: <AllWorks/> },
      { path: "/politics", element: <PoliticArticles/> },
      { path: "/politicsDetails/:id", element: <BlogPoliticsDetails/> },
      { path: "/celebrity", element: <CelebrityArticle/> },
      { path: "/celebrityDetails/:id", element: <CelebrityDetails/> },
      { path: "/fashion", element: <FashionArticle/> },
      { path: "/fashionDetail/:id", element: <FashionDetail/> },
      // other routes...
    ],
  },
  {
    element:<AuthLayout/>,
    children : [
      { path: "/signUp", element: <SignUpPage/> },
      { path: "/signIn", element: <SignInPage/> },
    ]
  }
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

