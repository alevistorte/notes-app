import React from "react";
import { RouterProvider } from "react-router-dom";
import { router as appRouter } from "./components/routers/appRouter";

export const NotesApp = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
