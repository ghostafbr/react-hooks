import { useCounter } from '../hooks/useCounter';
export const CounterWithCustomHook = () => {
  const { counter, increment, restart, decrement } = useCounter();

  return (
    <>
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />
      <button className='btn btn-primary' onClick={() => increment(5)}>
        +1
      </button>
      <button className='btn btn-primary' onClick={restart}>
        Reset
      </button>
      <button className='btn btn-primary' onClick={() => decrement(12)}>
        -1
      </button>
    </>
  );
};
