import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: "",
});

import React from "react";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setUser(username);
      return true;
    }
    return false;
  };

  const handleLogOut = () => {
    setUser("");
  };

  const values = {
    user,
    handleLogin,
    handleLogOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
