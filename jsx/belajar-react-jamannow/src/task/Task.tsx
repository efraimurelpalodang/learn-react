import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Task = () => {
  const [items, setItems] = useImmer<string[]>([]);

  const handleSubmit = (cb: (item: string[]) => void) => {
    setItems(cb);
  }

  return (
    <>
      <TaskForm setItems={handleSubmit}/>
      <TaskList items={items}/>
    </>
  );
}

export default Task;