import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./app.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Services from "./Components/Services.jsx";
import Login from "./Pages/Login.jsx";
import Registration from "./Pages/Registration.jsx";
import MyServices from "./DashBoard/MyServices.jsx";
import MySchedule from "./DashBoard/MySchedule.jsx";
import AddServices from "./DashBoard/AddServices.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/myservices",
        element: <MyServices></MyServices>,
      },
      {
        path: "/myschedule",
        element: <MySchedule></MySchedule>,
      },
      {
        path: "/addservices",
        element: <AddServices></AddServices>,
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
