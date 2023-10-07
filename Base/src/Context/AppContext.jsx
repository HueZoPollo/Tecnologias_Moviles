import { createContext, useState } from "react";

const personObj = {
  id: 1,
  name: "Héctor",
  lastname: "Reyes",
  age: 21,
  location: "Morelia",
  country: "Mexico",
  school: "ITM",
  isActive: false,
};

export const AppContext = createContext();

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppContextProvider = ({ children }) => {
  const [person, setPerson] = useState(personObj);

  const handleIsActive = () => {
    setPerson({
      ...person,
      isActive: !person.isActive,
    });
  };

  const values = {
    person,
    handleIsActive,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
