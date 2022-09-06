import React, { useContext, useState } from "react";
// 3. Create context
const ThemeContext = React.createContext();
const ThemeUpdate = React.createContext();

// 6. Custom Hook
export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdate);
}
// 1. 2. 5.
export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }
  return (
    // 4.
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdate.Provider value={toggleTheme}>
        {children}
      </ThemeUpdate.Provider>
    </ThemeContext.Provider>
  );
}
// 1. Creer une state qui detient True or False
// 2. Creer function Toggle de la State
// 3. Creer le context avec React.createContext()
// 4. Passer la value dans un provider
// 5. La fonction prend en Props "children" pour que tout les composant aient accès à celle-ci
// 6. Custom Hook qui consume le context pour utiliser la logique simplement dans toute l'app
