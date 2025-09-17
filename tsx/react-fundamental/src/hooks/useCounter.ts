import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return {
    count,
    handleDecrement,
    handleIncrement,
    handleReset
  }
}
