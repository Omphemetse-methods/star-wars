import React, { useState, useEffect } from "react";
import app from "../utils/realm";

const AuthContext = React.createContext({
  user: null,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(app.currentUser);

  const signIn = (email, password) => {};

  const signOut = () => {};

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export { AuthProvider, useAuth };
