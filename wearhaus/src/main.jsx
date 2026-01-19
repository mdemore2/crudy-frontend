import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App page="home"/>,
  },
  {
    path: "login",
    element: <App page="login"/>
  },
  {
    path: "register",
    element: <App page="register"/>
  },
  {
    path: "create-item",
    element: <App page="create-item"/>
  },
  {
    path: "my-items",
    element: <App page="my-items"/>
  },
]);

//    <RouterProvider router={router} />


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);