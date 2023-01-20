import Swal from "sweetalert2";

import {
  firebase,
  googleAuthProvider,
  auth,
} from "../firebase/firebase-config";
import { types } from "../types/types";
import { noteLogout } from "./notes";

export const startLoginEmailPass = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((e) => {
        dispatch(finishLoading());
        Swal.fire(
          "Incorrect user or password",
          "Type your credentials again",
          "error"
        );
      });
  };
};

export const startRegisterWithEmailPassword = (email, password, name) => {
  return (dispatch) => {
    // After register, the user is logged automatically
    firebase
      .createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await firebase.updateProfile(user, { displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => console.log(e));
  };
};

export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.signOut(auth);
    dispatch(logout());
    dispatch(noteLogout());
  };
};

export const logout = () => ({ type: types.logout });
