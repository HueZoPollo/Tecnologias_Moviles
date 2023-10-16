import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  user: "",
});

import React from "react";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleLogin = async (username, password) => {
    if (username === "admin" && password === "admin") {
      setUser(username);
      await AsyncStorage.setItem("user", username);
      return true;
    }
    return false;
  };

  const handleLogOut = async () => {
    await AsyncStorage.removeItem("user");
    setUser("");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const userValue = await AsyncStorage.getItem("user");
        if (userValue) {
          setUser(userValue);
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
