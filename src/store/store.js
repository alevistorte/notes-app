import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";

// There is an implicit middleware configured
export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});
