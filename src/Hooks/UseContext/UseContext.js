import React, { useState } from "react";
import ClassContextComponent from "./ClassContextComponent";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

// This file reproduce the APP component
function LearnUseContext() {
  return (
    <div>
      <h1>UseContext</h1>
      <ThemeProvider>
        {/* <ClassContextComponent /> */}
        <FunctionContextComponent />
      </ThemeProvider>
    </div>
  );
}

export default LearnUseContext;

// Ce Hook permet de partager une state à travers tout les composant imbriqué relié à celle-ci , evite devoir daire du "Props Drilling"
