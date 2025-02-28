import { createContext, useContext, useState } from 'react';

// Create ThemeContext
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// ThemeProvider to wrap your app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default'); // 'default' or 'alt'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'default' ? 'alt' : 'default'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
