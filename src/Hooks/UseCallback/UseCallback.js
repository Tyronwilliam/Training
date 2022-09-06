import React, { useCallback, useState } from "react";
import List from "./List";
function UseCallback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "white" : "black",
  };
  return (
    <div style={theme}>
      <h1>UseCallback </h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallback;

// UseCallback retourne la fonction alors que Usememo retourne la valeur
// Même fonctionnement que useMemo evite que notre fonction soit appelé a chaque rendu
// La fonction se recrée car la refrential equality n'est pas la même (Une meme fonction qui n'a oas la même reference)
