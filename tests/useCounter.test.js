const { renderHook } = require('@testing-library/react');
const { act } = require('react-dom/test-utils');
const { useCounter } = require('../src/hooks/useCounter');

describe('Test in useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, restart } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(restart).toEqual(expect.any(Function));
  });

  test('should generate the counter with 100 as value', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test('should increment the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;
    act(() => {
      increment();
      increment(2);
    });
    expect(result.current.counter).toBe(103);
  });

  test('should decrement the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;
    act(() => {
      decrement();
      decrement(2);
    });
    expect(result.current.counter).toBe(97);
  });

  test('should restart the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement, restart } = result.current;
    act(() => {
      decrement();
      restart();
    });
    expect(result.current.counter).toBe(100);
  });
});
