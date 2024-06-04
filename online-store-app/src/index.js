import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutUs from './pages/about';
import Products from './pages/products';


import { createBrowserRouter, RouterProvider } from "react-router-dom";
const paths = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/pages/about",
    element: <AboutUs />,
  },
  {
    path: "/pages/products",
    element: <Products />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
