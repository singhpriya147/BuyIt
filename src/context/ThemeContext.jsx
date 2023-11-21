import { createContext, useEffect, useMemo, useState } from 'react';


const storageKey = 'theme';

export const ThemeContext = createContext();


export function ThemeProvider({ children }) {
 


  const [theme, setTheme] = useState(() => {
    
    const storedTheme = localStorage.getItem(storageKey);
    return storedTheme ;
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
