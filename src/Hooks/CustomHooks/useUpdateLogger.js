import { useEffect } from "react";

export default function useUpdateLoggers(value) {
  useEffect(() => {
    console.log(value);
  });
}
