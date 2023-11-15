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
import ServiceData from "./Components/ServiceData.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import ErrorPage from "./ErrorPage.jsx";
import UpdateService from "./DashBoard/UpdateService.jsx";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceData></ServiceData>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path:"/updateAddition/:id",
        element:<UpdateService></UpdateService>,
        loader:({params})=>fetch(`http://localhost:5000/showAddService/${params.id}`)
      },
      {
        path: "/myservices",
        element: <MyServices></MyServices>
      
      },
      {
        path: "/myschedule",
        element: <PrivateRoute><MySchedule></MySchedule></PrivateRoute>,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
