import { useState } from "react";
import Counter from "./Counter";
import type { Change } from "../ts/types";

const CounterApp = () => {
  const [show2, setShow2 ] = useState(true);

  const handleChange = (e: Change) => {
    setShow2(e.target.checked);
  }

  return (
    <>
      <Counter/>
      {show2 && <Counter/> }
      <input type="checkbox" checked={show2} onChange={handleChange} />
    </>
  );
}

export default CounterApp;