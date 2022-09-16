import React from "react";
import "../style/PokemonApp/card.scss";
import useGetId from "./hook/useId";
function PokemonCard({ img, name }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
}

export default PokemonCard;
