import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthScreen } from "../auth/AuthScreen";
import { LoginScreen } from "../auth/LoginScreen";
import { RegisterScreen } from "../auth/RegisterScreen";
import { JournalScreen } from "../journal/JournalScreen";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const router = createBrowserRouter([
  {
    path: "/auth/",
    element: <PublicRoutes />,
    children: [
      {
        index: true,
        element: (
          <div>
            <h1>Auth Screen</h1>
          </div>
        ),
      },
      {
        path: "/auth/login",
        element: <LoginScreen />,
      },
      {
        path: "/auth/register",
        element: <RegisterScreen />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    errorElement: <Navigate to={"/auth/login"} />,
  },
]);
