import React, { useCallback, useEffect, useState } from "react";
import "../style/NoteApp/note.scss";
import { useLocalStorage } from "./hook/useLocalStorage";
function Note() {
  const save = useLocalStorage();
  return (
    <div className="container-note">
      <textarea
        value={save.value}
        className="noteArea"
        onChange={(e) => save.setValue(e.target.value)}
      ></textarea>
      <button
        onClick={(e) => {
          e.preventDefault();
          save.save();
          save.setValue("");
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Note;
