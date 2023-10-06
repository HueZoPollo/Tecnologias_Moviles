import { createContext, useState } from "react";

const THEMEDARK = {
  textColor: "white",
  textColorButton: "black",
  buttonColor: "#edf987",
  backgroundColorCustom: "#0d0d0d",
  textMinusColor: "#858585",
  subMenuColor: "#1f1f1f",
  iconColor: "white",
  iconColorBlack: "black",
  icon: "sunny-outline",
  cardWhite: "white",
  textCard: "black",
  backgroundActionColor: "#1f1f1f",
  textBoxMinusColor: "#858585",
};
const THEMELIGHT = {
  textColor: "black",
  textColorButton: "white",
  buttonColor: "#167102",
  backgroundColorCustom: "white",
  textMinusColor: "#505050",
  subMenuColor: "#e8e8e8",
  iconColor: "black",
  iconColorBlack: "white",
  icon: "moon-outline",
  cardWhite: "black",
  textCard: "white",
  backgroundActionColor: "#e8e8e8",
  textBoxMinusColor: "black",
};

const PERSON = {
  id: 1,
  name: "Juan",
  lastname: "Perez",
  age: 25,
  city: "Santiago",
  country: "Chile",
  isActive: false,
};

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMEDARK);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    if (isDark) {
      setTheme(THEMELIGHT);
      setIsDark(false);
    } else {
      setTheme(THEMEDARK);
      setIsDark(true);
    }
  };

  const values = {
    theme,
    toggleTheme,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
