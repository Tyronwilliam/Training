import React, { useState, useMemo, useEffect } from "react";

function LearnUseMemos() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "wheat",
      color: dark ? "wheat" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyle]);
  return (
    <div>
      <h1>UseMemo</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark(!dark)}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

export default LearnUseMemos;

function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

// Pourquoi utiliser useMemo ?

// 1. Il met en cache une valeur donc elle ne sera pas recalculé
// 2. Il "run" seulement lorsque la valeur mise en cache change
// 3. Il permet d'éviter des depense en performance

// Commons Usage

// 1. When you want to make a slow function wrap inside useMemo so that doesn't re-compute every single time you render your component and it only computed when you acually need the value from that function since the inputs actually change
// 2. Whenever you want to make sure the reference of an object or an array is exactly the same as it was the last time you rendered if none of the internal workings changed, you're gonna want to useMemo here to make sure that you only update the reference of that object whenever the actual contents of the object change instead of updating every single time you render
