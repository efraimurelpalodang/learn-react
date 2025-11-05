import { useState } from "react";
import type { buttonEvent, Change, TaskFormProps } from "../ts/types";

const TaskForm = ({onSubmit}: TaskFormProps) => {
  const [item, setItem] = useState("");

  const handleChange = (e: Change) => {
    setItem(e.target.value);
  }

  const handleClick = (e: buttonEvent) => {
    e.preventDefault();
    onSubmit(item);
    setItem("");
  }

  return (
    <>
      <h1>Buat Task</h1>
      <form>
        <input type="text" placeholder="Masukkan Task..." value={item} onChange={handleChange}/>
        <button type="submit" onClick={handleClick}>Tambah</button>
      </form>
    </>
  )
}

export default TaskForm;