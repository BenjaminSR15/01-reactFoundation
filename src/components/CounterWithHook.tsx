import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { count, increseBy } = useCounter({
    initValue: 5,
  });
  return (
    <>
      <h3>
        Contador: <small>{count}</small>
      </h3>
      <div>
        <button onClick={() => increseBy(+1)}>+1</button>
        &nbsp;
        <button onClick={() => increseBy(-1)}>-1</button>
      </div>
    </>
  );
};
