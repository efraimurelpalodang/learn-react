import { useState } from "react";
import Counter from "./Counter";
import type { Change } from "../ts/types";

const CounterApp = () => {
  const [show2, setShow2] = useState(true);

  const handleChange = (e: Change) => {
    setShow2(e.target.checked);
  };

  return (
    <>
    {/* <Counter nama="Jhon Dae"/> */}
    {show2 ? (
      <Counter nama="Jhon Dae" key='1' />
    ) : (
      <Counter nama="Alice" key='2'/>
    )}
    <input type="checkbox" checked={show2} onChange={handleChange} />
    </>
  );
};

export default CounterApp;
