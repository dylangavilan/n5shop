import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  darkTheme: false,
  toggleTheme: () => {},
});


const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleThemeHandler = () => {
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkTheme: darkTheme,
        toggleTheme: toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;