import { useState } from "react";

function useInput(initialValue) {
  if (initialValue === undefined) {
    initialValue = "";
  }

  if (typeof initialValue !== "string") {
    throw new Error("Initial value must be a string");
  }

  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
}

export default useInput;
