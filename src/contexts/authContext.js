import { createContext, useEffect, useState, useContext } from "react";
import fire from "../fire";
import { googleAcc } from "../fire";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const googleProvider = new GoogleAuthProvider();
  const authWithGoogle = async () => {
    try {
      await signInWithPopup(googleAcc, googleProvider);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  
  function resetPassword(email) {
    const auth = fire.auth();
    return auth.sendPasswordResetEmail(email);
  }

  const values = {
    email,
    user,
    handleLogout,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    authWithGoogle,
    resetPassword,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
