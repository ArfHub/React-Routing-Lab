import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Login from './pages/Login';
import "./index.css"
import ErrorPage from './pages/ErrorPage';
import BotCambInfo from './pages/BotCambInfo';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/Login",
    element: <Login/>,
    errorElement: <ErrorPage />,
    
  },{
    path: "/BotCambInfo",
    element: <BotCambInfo/>,
    errorElement: <ErrorPage />,
    
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
