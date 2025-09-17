import { useCounter } from "../hooks/useCounter.ts"

export function Counter() {
  const {count, handleDecrement, handleIncrement, handleReset} = useCounter();

  return (
    <div style={{
      display: "flex",
      gap: "16px",
    }}>
      <button onClick={handleDecrement}>Kurang</button>
      <p style={{fontSize: "20px"}}>{count}</p>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}