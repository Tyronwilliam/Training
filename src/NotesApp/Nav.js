import React, { useEffect, useState } from "react";
import "../style/NoteApp/nav.scss";
import { useNote, useUpdateNote } from "./hook/useContext";
function Nav() {
  // DELETE
  const allNote = useNote();
  const getAllValueLocalStorage = useUpdateNote();
  function deleteNote(key) {
    let result = localStorage.removeItem(key);
    getAllValueLocalStorage(allNote);

    console.log(result);
  }

  return (
    <div className="container-nav">
      {allNote?.map((note) => {
        return (
          <div key={note.id}>
            <p>{note.note}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Nav;
