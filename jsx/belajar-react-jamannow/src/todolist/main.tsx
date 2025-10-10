import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container";
import Todo from "./Todo";
import { todos } from "../ts/data";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} />
      ))}
    </Container>
  </StrictMode>
);
