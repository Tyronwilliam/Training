import React from "react";
import Header from "./Header";
import Note from "./Note";
import "../style/NoteApp/index.scss";
import Nav from "./Nav";
import { NoteProvider } from "./hook/useContext";
// User can write or create a note OK
// Can save the note by clicking save OK
// Can delete their note
// Can search Their note
function Mains() {
  // const save = useLocalStorage();
  return (
    <NoteProvider>
      <div className="container">
        <Header />
        <section className="note-section">
          <Note />
          <Note />
          <Note />
        </section>
        <Nav />
      </div>
    </NoteProvider>
  );
}

export default Mains;
