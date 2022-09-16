import React, { useEffect, useState } from "react";
import usePokemonApi from "./hook/usePokemonApi";
import PokemonCard from "./pokemonCard";
import "../style/PokemonApp/main.scss";
function Pokemon() {
  const { getPokemon, pokeWithImg } = usePokemonApi();
  const [select, setSelect] = useState({});
  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <section className="container">
      {/* Panel Pokemon */}
      <section className="container-panel">
        {pokeWithImg.map((poke, index) => {
          return (
            <div key={index} onClick={() => setSelect(poke)}>
              <PokemonCard img={poke.img} name={poke.name} />;
            </div>
          );
        })}
      </section>
      {/* Preview  */}
      <article className="select">
        <img src={select.img} alt="" />
      </article>
    </section>
  );
}

export default Pokemon;
