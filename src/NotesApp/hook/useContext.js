import React, { createContext, useContext, useMemo, useState } from "react";

const myNote = createContext();
const allMyNote = createContext();
export function useNote() {
  return useContext(myNote);
}

export function useUpdateNote() {
  return useContext(allMyNote);
}
export function NoteProvider({ children }) {
  const [allNote, setAllNote] = useState([]);

  function getAllValueLocalStorage() {
    let arr = [];
    let values;
    let key = Object.keys(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
      values = {
        id: key[i],
        note: JSON.parse(localStorage.getItem(key[i])),
      };

      arr.push(values);
    }

    return setAllNote(arr);
  }
  return (
    <myNote.Provider value={allNote}>
      <allMyNote.Provider value={getAllValueLocalStorage}>
        {children}
      </allMyNote.Provider>
    </myNote.Provider>
  );
}
