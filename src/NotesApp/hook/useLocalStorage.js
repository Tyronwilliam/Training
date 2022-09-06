import { useCallback, useState, useMemo } from "react";

// import React, { useCallback, useEffect, useState } from "react";
export function useLocalStorage() {
  const [value, setValue] = useState("");
  const allNote = {};
  // useMemo(() => {
  //   return {};
  // }, []);
  let id = Math.floor(Math.random() * 100);
  const save = () => window.localStorage.setItem(id, JSON.stringify(value));
  const getNote = useCallback(() => {
    let key = Object.keys(localStorage);
    let lenght = key.length;

    while (lenght--) {
      allNote[key[lenght]] = JSON.parse(
        window.localStorage.getItem(key[lenght])
      );
    }

    return allNote;
  }, [allNote]);
  return { value, save, setValue, allNote, getNote };
}
