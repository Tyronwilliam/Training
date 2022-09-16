import React, { useState } from "react";

function useGetId(poke) {
  const [pokeId, setPokeId] = useState({});
  setPokeId(poke);
  return { pokeId };
}

export default useGetId;
