import React from "react";
import "../style/NoteApp/header.scss";
function Header() {
  return (
    <div className="container-header">
      <h1>MyNote</h1>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="inputSearch" />
      </div>
    </div>
  );
}

export default Header;
