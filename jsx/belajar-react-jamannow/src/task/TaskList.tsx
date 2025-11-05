type TaskListProps = {
  items?: Array<string>;
};

const TaskList = ({ items = [] }: TaskListProps) => {

  return (
    <>
      <h1>List Task</h1>
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