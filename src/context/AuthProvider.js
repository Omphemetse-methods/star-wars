import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as Realm from "realm-web";

import app from "../utils/realm";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  let navigate = useNavigate();
  let location = useLocation();

  const [app, setApp] = useState(new Realm.App({ id: "tasktracker-tbrnt" }));

  // wrap the Realm.App object's user state with React state
  const [currentUser, setCurrentUser] = useState(app.currentUser);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState();

  const signIn = async ({ email, password }) => {
    setAuthLoading(true);

    try {
      const credentials = Realm.Credentials.emailPassword(email, password);
      await app.logIn(credentials);
      setCurrentUser(app.currentUser);

      navigate("/app");
    } catch (err) {
      setAuthError(err.errorCode);
    } finally {
      setAuthLoading(false);
    }
  };

  const signOut = async () => {
    // log out the cureently active user
    await app.currentUser?.logOut();

    // if another user was logged in too, they're now current user
    // otherwise, app.currentUser is null
    setCurrentUser(app.currentUser);

    navigate("/");
  };

  // register new user
  const registerNewUser = async ({ email, password }) => {
    setAuthLoading(true);

    try {
      await app.emailPasswordAuth.registerUser({ email, password });
      signIn({ email, password });
    } catch (err) {
      setAuthError(err.errorCode);
    } finally {
      setAuthLoading(false);
    }
  };

  // clear auth error on page change
  useEffect(() => {
    return () => {
      setAuthError("");
    };
  }, [location.pathname]);

  return (
    <AuthContext.Provider
      value={{
        app,
        currentUser,
        signIn,
        signOut,
        authLoading,
        authError,
        registerNewUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export { AuthProvider, useAuth };
