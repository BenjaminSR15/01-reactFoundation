import { useState } from "react";

interface Options {
  initValue: number;
}

export const useCounter = ({ initValue = 0 }: Options) => {
  const [count, setCount] = useState<number>(initValue);

  const increseBy = (value: number) => {
    const newValue = count + value;
    if (newValue < 0) return;
    setCount(count + value);
  };

  return {
    //Propieties

    count,

    //Metodos
    increseBy,
  };
};
