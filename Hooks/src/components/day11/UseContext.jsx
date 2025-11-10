import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export function UseContext1() {
  return useContext(ThemeContext);
}

export function UseContext2({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
