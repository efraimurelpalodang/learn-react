import { useState } from "react";
import type { PropsCounter } from "../ts/types";

const Counter = ({ nama }: PropsCounter) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter+1);
  }

  return (
    <>
      <h1>Counter {nama} : {counter}</h1>
      <button type="button" onClick={handleClick}>Tambah</button>
    </>
  )
}

export default Counter;