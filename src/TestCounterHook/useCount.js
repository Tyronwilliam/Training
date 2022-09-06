import { useState } from "react";

export const useCount = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue((c) => c + 1);
  const decrement = () => setValue((c) => c - 1);
  const reset = () => setValue(initialValue);

  return { value, increment, decrement, reset };
};
