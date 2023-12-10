import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Features from './pages/features/Features';
import Themes from './pages/themes/Themes'
import Blog from './pages/blog/Blog'

const router = createBrowserRouter([
{
  path:'/',
  element:<App />,
  children:[
       {
        path:'/',
        element:<Home />
       },
      {
        path:'/features',
        element:<Features />
      },
      {
        path:'/themes',
        element:<Themes />
      },
    {
      path:'/blog',
      element:<Blog />
    }
  ]






}

])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

