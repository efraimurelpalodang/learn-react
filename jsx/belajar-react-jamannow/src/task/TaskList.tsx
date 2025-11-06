import type { PropsTaskList } from "../ts/types";

const TaskList = ({items}: PropsTaskList) => {
  return (
    <>
      <h1>Daftar Task</h1>
      <ul>
        {
          items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))
        }
      </ul>
    </>
  )
}

export default TaskList;