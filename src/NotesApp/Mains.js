import React from "react";
import Header from "./Header";
import Note from "./Note";
import "../style/NoteApp/index.scss";
import Nav from "./Nav";
// User can write or create a note
// Can save the note by clicking save
// Can delete their note
// Can search Their note
function Mains() {
  // const save = useLocalStorage();
  return (
    <div className="container">
      <Header />
      <Nav />
      <Note />
      <button>Save</button>
      <button>Delete</button>
    </div>
  );
}

export default Mains;
