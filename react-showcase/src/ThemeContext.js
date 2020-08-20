import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [useInvertedStyle, setUseInvertedStyle] = useState(true);

  const toggleInvertedStyle = () => {
    setUseInvertedStyle(!useInvertedStyle);
  };

  const values = { useInvertedStyle, toggleInvertedStyle };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
