/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
 

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();


  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update profile
  const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // google sign in

  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // login

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout

  const Logout = () => {
    return signOut(auth);
  };

  //   observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("observing current user inside useEffect", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    handleUpdateProfile,
    Logout,
    loading,
    GoogleSignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
