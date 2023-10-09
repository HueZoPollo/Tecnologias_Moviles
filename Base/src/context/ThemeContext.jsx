import { createContext, useState } from "react";

const THEMEDARK = {
  text: "white",
  textButton: "black",
  button: "#edf987",
  backgroundCustom: "#0d0d0d",
  textMinus: "#858585",
  subMenu: "#1f1f1f",
  icon: "white",
  iconBlack: "black",
  icon: "sunny-outline",
  cardWhite: "white",
  textCard: "black",
  backgroundAction: "#1f1f1f",
  textBoxMinus: "#858585",
};
const THEMELIGHT = {
  text: "black",
  textButton: "white",
  button: "#167102",
  backgroundCustom: "white",
  textMinus: "#505050",
  subMenu: "#e8e8e8",
  icon: "black",
  iconBlack: "white",
  icon: "moon-outline",
  cardWhite: "black",
  textCard: "white",
  backgroundAction: "#e8e8e8",
  textBoxMinus: "black",
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

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMELIGHT);
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

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
