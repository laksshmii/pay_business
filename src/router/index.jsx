// router/index.jsx
import * as React from "react";
import { createHashRouter, Navigate } from "react-router-dom";

import Dashboard from "@/router/modules/dashboard/Index.jsx";
import ResponsiveDrawer from "@/components/common/layout"; // your app layout

const router = [
  {
    path: "/",
    element: <ResponsiveDrawer />, // Always show dashboard layout
    children: [
      ...Dashboard, // load all dashboard routes
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />, // fallback to dashboard
  },
];

export default createHashRouter(router);
