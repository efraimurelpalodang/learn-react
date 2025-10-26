import { useState } from "react";

const Counter = () => {
  const [val, setVal] = useState(0);

  const handleClick = () => {
    setVal(val+1);
    console.log('count '+val);
  }

  return (
    <>
      <button onClick={handleClick}>Counter : {val} </button>
    </>
  )
}

export default Counter;