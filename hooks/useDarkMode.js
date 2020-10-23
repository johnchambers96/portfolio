import { useEffect, useState } from "react";
import { themeTypes } from "../constants";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(themeTypes.LIGHT);
 
  const [componentMounted, setComponentMounted] = useState(false);
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === themeTypes.LIGHT) {
      setMode(themeTypes.DARK);
    } else {
      setMode(themeTypes.LIGHT);
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode(themeTypes.DARK)
      : localTheme
      ? setTheme(localTheme)
      : setMode(themeTypes.LIGHT);
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
