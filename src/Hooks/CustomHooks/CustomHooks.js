import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLoggers from "./useUpdateLogger";

function CustomHooks() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLoggers(name);
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

export default CustomHooks;
