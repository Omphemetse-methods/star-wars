import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? <>{children}</> : <Navigate to="/sign_in" />;
};

export default PrivateRoute;
