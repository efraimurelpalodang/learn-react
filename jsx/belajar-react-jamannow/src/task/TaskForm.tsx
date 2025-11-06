import { useState } from "react";
import type { buttonEvent, Change, TaskFormProps } from "../ts/types";

const TaskForm = ({onSubmit}: TaskFormProps) => {
  const [item, setItem] = useState<string>("");

  const handleChange = (e: Change) => {
    setItem(e.target.value);
  }

  const handleClick = (e: buttonEvent) => {
    e.preventDefault();
    if(item) {
      onSubmit(item);
      setItem("");
    } else {
      alert('Task tidak boleh kosong broo...')
    }
  }

  return (
    <>
      <h1>Tambah Task Baru</h1>
      <form>
        <input type="text" placeholder="tambahkan task..." onChange={handleChange} value={item}/>
        <button type="submit" onClick={handleClick}>tambah</button>
      </form>
    </>
  );
}

export default TaskForm;