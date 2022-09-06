import React, { useState, useRef, useEffect } from "react";

function LearnUseRefs() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const prevName = useRef("");
  function focus() {
    inputRef.current.focus();
    // inputRef.current;
  }
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <h1>UseRef</h1>
      <p>Exemple 1</p>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        {" "}
        My name is {name} and it used to be {prevName.current}
      </div>
      <button onClick={focus}>Focus</button>
      <div></div>
      {/* <div>I rendered {renderCount.current} times</div> */}
      <p>Exemple 2</p>
    </div>
  );
}

export default LearnUseRefs;
// Pourquoi utiliser useRef ?

// 1. Il permet de faire persister des valeurs entre les rendus
// 2. Il permet de stocker une valeur mutable qui ne déclecnche pas de re-render lorsqu'elle est modifié
// 3. Il peux être utilisé directement via le DOM (voir input focus function)

// Commons Usage

// 1. Référence à un composant
