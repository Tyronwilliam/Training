import React, { useMemo, useState } from "react";
import "../style/NoteApp/note.scss";
import { useUpdateNote } from "./hook/useContext";

function Note() {
  const [note, setNote] = useState("");
  const getAllValueLocalStorage = useUpdateNote();
  let id = Math.floor(Math.random() * 100);

  function saveToLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  return (
    <div className="container-note">
      <textarea
        className="noteArea"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          saveToLocalStorage(id, note);
          setNote("");
          getAllValueLocalStorage();
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Note;
