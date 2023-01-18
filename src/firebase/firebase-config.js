import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAycQHolfGFBFH3Y4iy6DLSAv13cZdiAC8",
  authDomain: "react-notes-app-cc2ba.firebaseapp.com",
  projectId: "react-notes-app-cc2ba",
  storageBucket: "react-notes-app-cc2ba.appspot.com",
  messagingSenderId: "101333926965",
  appId: "1:101333926965:web:e2c1926e0666b681315d7c",
};

const firebase = {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = new Firestore();
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

export { db, auth, googleAuthProvider, firebase };
