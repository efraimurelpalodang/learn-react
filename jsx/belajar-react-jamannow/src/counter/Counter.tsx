import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter+1);
  }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button type="button" onClick={handleClick}>Tambah</button>
    </>
  )
}

export default Counter;