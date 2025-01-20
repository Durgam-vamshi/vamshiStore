import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpZnhNZEGn2ZIm24nB9ftK15k9fboB__Y",
  authDomain: "vamshistore-d468a.firebaseapp.com",
  projectId: "vamshistore-d468a",
  storageBucket: "vamshistore-d468a.firebasestorage.app",
  messagingSenderId: "664135379290",
  appId: "1:664135379290:web:bb7a64618dc2f4c1e5eb63",
  measurementId: "G-ZJFJHM0LC8",
  databaseURL: "https://vamshistore-d468a-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const FirebaseContext = createContext(null);

// Hook to use Firebase functions
export const useFirebase = () => useContext(FirebaseContext);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Sign Up (Email/Password)
const signUpUserWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

// Sign In (Email/Password)
const signInUserWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

// Sign In with Google
const signInWithGoogle = () => {
  return signInWithPopup(firebaseAuth, googleProvider);
};

// Export functions and Firebase instance via Context
export const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider
      value={{
        firebaseAuth,
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPassword,
        signInWithGoogle,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
