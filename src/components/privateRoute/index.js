import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "../../layout/protectedLayout/layout";
import NoLayout from "../../layout/protectedLayout/noLayout";

import { useSelector } from "react-redux";
import ProtectedLayout from "../../layout/protectedLayout/layout";

const RouteSuperComponent = (props) => {
  const authUser = useSelector((state) => state.authStore.authUser);
  console.log("authuser", authUser)
  const location = useLocation();
    if (!authUser) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <ProtectedLayout {...props}/>;
};

export default RouteSuperComponent;
