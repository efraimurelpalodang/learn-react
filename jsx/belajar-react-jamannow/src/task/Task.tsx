import { useState } from "react";
import { useImmer } from "use-immer";
import type { buttonEvent, Change } from "../ts/types";

const Task = () => {
  const [item, setItem] = useState("");
  const [Items, setItems] = useImmer<string[]>([]);

  const handleChange = (e: Change) => {
    setItem(e.target.value)
  }

  const handleClick = (e: buttonEvent) => {
    e.preventDefault();
    setItems((draft) => {
      draft.push(item);
    })
    setItem("");
  }

  return (
    <>
      <h1>Buat Task</h1>
      <form>
        <input type="text" onChange={handleChange} value={item} />
        <button type="submit" onClick={handleClick}>Simpan</button>
      </form>
      <h1>List Task</h1>
      <ul>
        {
          Items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Task;