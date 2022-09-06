import React from "react";
import { useCount } from "./useCount";
function Main() {
  const quantity = useCount(0);
  return (
    <div>
      <button onClick={quantity.increment}>-</button>
      <span>{quantity.value}</span>
      <button onClick={quantity.decrement}>+</button>
    </div>
  );
}

export default Main;
