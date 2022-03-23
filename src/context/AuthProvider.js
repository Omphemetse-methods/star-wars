import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Realm from "realm-web";

import app from "../utils/realm";

const AuthContext = React.createContext({
  user: null,
});

const AuthProvider = ({ children }) => {
  let navigate = useNavigate();

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
      setAuthError("Invalid password/email");
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
  };

  return (
    <AuthContext.Provider
      value={{ app, currentUser, signIn, signOut, authLoading, authError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export { AuthProvider, useAuth };
