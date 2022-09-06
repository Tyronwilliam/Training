import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
function FunctionContextComponent() {
  // Utilisation des Hook
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  //   Creation du theme
  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "wheat",
    color: darkTheme ? "wheat" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}

export default FunctionContextComponent;
