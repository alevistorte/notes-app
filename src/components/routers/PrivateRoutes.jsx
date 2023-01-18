import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { JournalScreen } from "../journal/JournalScreen";

export const PrivateRoutes = () => {
  const logged = Boolean(useSelector((state) => state.auth)?.name);

  return <>{logged ? <JournalScreen /> : <Navigate to={"/auth/login"} />}</>;
};
