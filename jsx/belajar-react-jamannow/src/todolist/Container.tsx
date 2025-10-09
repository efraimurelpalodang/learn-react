import type { ChildContainer } from "../ts/types";

export default function Container({children}: ChildContainer) {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {children}
      </ul>
    </>
  );
}