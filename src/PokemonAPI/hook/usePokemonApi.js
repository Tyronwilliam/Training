import { useCallback, useMemo, useState } from "react";
import axios from "axios";

function usePokemonApi() {
  let pokemons = [];
  const [pokeWithImg, setPokeWithImg] = useState([]);
  const getPokemon = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => {
        pokemons = res.data.results;
      })
      .catch((err) => {
        console.log(err);
      });
    let lenght = pokemons.length + 1;
    let index = 0;
    for (let i = 1; i < lenght; i++) {
      let imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
      pokemons[index]["img"] = imgPokemon;
      index += 1;
    }

    return setPokeWithImg(pokemons);
  };
  //   const addImageToPokemon = () => {
  //     return pokemons;
  //   };
  //   addImageToPokemon();
  return { pokeWithImg, getPokemon };
}

export default usePokemonApi;
