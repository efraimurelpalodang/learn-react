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
    {/* <Counter nama="Jhon Dae"/> */}
    {show2 ? <Counter nama="Jhon Dae" /> : <Counter nama="Alice" />}
    <input type="checkbox" checked={show2} onChange={handleChange} />
   </>
  );
}

export default CounterApp;