import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { login } from "./actions/auth";
import { startLoadingNotes } from "./actions/notes";
import { firebase, auth } from "./firebase/firebase-config";

export const RootApp = ({ router }) => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  // getting credentials
  useEffect(() => {
    firebase.onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        dispatch(startLoadingNotes(user.uid));
      }

      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

  return <RouterProvider router={router} />;
};
