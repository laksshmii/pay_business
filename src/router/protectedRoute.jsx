import React from "react";
import { Navigate } from "react-router-dom";
import ResponsiveDrawer from "@/components/common/layout";

const ProtectedRoute = () => {
  //   const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return isAuthenticated ? <ResponsiveDrawer /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
