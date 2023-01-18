import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AuthScreen } from "../auth/AuthScreen";

export const PublicRoutes = () => {
  const logged = Boolean(useSelector((state) => state.auth)?.name);

  return <>{!logged ? <AuthScreen /> : <Navigate to={"/"} />}</>;
};
