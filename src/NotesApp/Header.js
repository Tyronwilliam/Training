import React, { useEffect, useState } from "react";
import "../style/NoteApp/header.scss";
import { useNote, useUpdateNote } from "./hook/useContext";
function Header() {
  const [search, setSearch] = useState("");
  const allNote = useNote();
  const getAllValueLocalStorage = useUpdateNote();
  useEffect(() => {
    getAllValueLocalStorage();
  }, []);
  function inputHandler(e) {
    let lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  }
  const filteredData = allNote.filter((el) => {
    // console.log(el, "my element");
    if (search === "") {
      return el.note;
    } else {
      return el.note.toLowerCase().includes(search.toLowerCase());
    }
  });
  return (
    <div className="container-header">
      <h1>MyNote</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="inputSearch"
          onChange={inputHandler}
        />
      </div>
      <ul className="list">
        {filteredData?.map((item) => (
          <li key={item.id}>{item.note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
