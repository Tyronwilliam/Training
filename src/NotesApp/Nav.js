import React, { useEffect } from "react";
import { useLocalStorage } from "./hook/useLocalStorage";

function Nav() {
  const note = useLocalStorage();
  const allNote = note.getNote();
  useEffect(() => {
    console.log(allNote, "what");
  }, [note.allNote]);
  //   const allNote = note.getNote();
  return (
    <div className="container-nav">
      {/* {allNote.map((notes) => {
        return notes;
      })} */}
    </div>
  );
}

export default Nav;
