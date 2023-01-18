import React from "react";
import { Provider } from "react-redux";
import { router as appRouter } from "./components/routers/appRouter";
import { RootApp } from "./RootApp";
import { store } from "./store/store";

export const NotesApp = () => {
  return (
    <Provider store={store}>
      <RootApp router={appRouter} />
    </Provider>
  );
};
