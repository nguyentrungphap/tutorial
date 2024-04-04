import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./App/Pages/Home";
import Products from "./App/Pages/Product";
import Services from "./App/Pages/Services";
import SignUp from "./App/Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Products",
        element: <Products />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "SignUp",
        element: <SignUp />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
