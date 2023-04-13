import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./routes/root";
import ErrorPage from "./error-page";
import RegistrationPage from './routes/RegistrationPage';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "register",
        element: <RegistrationPage />,
      },
    ],
  },
  {
    path: "login",
    element: <SignIn />,
  },
  {
    path: "signout",
    element: <SignUp />,
  },
]); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

