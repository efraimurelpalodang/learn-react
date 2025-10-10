import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container";
import Todo from "./Todo";
import { todos } from "../ts/data";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Container>
  </StrictMode>
);
