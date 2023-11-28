import { createContext, useEffect, useMemo, useState } from 'react';






export const ThemeContext = createContext(null);
ThemeContext.displayName = 'ThemeContext';
const storageKey = 'theme';


export function ThemeProvider({ children }) {
 
//  const prefersDarkMode = window.matchMedia(
//    '(prefers-color-scheme: dark)'
//  ).matches;


  const [theme, setTheme] = useState(() => {
    // Use localStorage value if available, otherwise use prefersDarkMode
    const storedTheme = localStorage.getItem(storageKey);
    return storedTheme || "light";
  });

  
  useEffect(() => {
    localStorage.setItem(storageKey, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((currentTheme) =>
          currentTheme === 'dark' ? 'light' : 'dark'
        ),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
