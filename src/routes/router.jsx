import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Register from "./Register";
import List from "./List";
import Carousel from "../components/Carousel";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Carousel/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/list",
        element: <List/>,
      },
    ],
  },
]);
