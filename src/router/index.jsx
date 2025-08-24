import * as React from "react";
import {
  createHashRouter,
  Navigate,
} from "react-router-dom";

import Dashboard from "@/router/modules/dashboard/Index.jsx";
import ProtectedRoute from "@/router/protectedRoute";


const router = [
  {
    path: "/",
    element: <ProtectedRoute />,
    errorElement: <ProtectedRoute />,
    children: [

      ...Dashboard,


    ],
  },
  {
    path: "/login",
    element:
      localStorage.getItem("isAuthenticated") === "true" ? (
        <Navigate to="/dashBoard" />
      ) : (
        <Login />
      ),
  },
];


export default createHashRouter(router);
