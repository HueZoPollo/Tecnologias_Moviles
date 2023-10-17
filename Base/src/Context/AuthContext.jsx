import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext({
  user: "",
});

import React from "react";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleLogin = async (username, password) => {
    if (username === "admin" && password === "admin") {
      await SecureStore.setItemAsync("user", username);
      setUser(username);
      return true;
    }
    return false;
  };

  const handleLogOut = async () => {
    try {
      await SecureStore.deleteItemAsync("user");
      setUser("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await SecureStore.getItemAsync("user");
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const values = {
    user,
    handleLogin,
    handleLogOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
