import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./Container";
import Todo from "./Todo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <Todo isCompleted={true} text="Learn HTML" isDeleted={true} />
      <Todo isCompleted={true} text="Learn CSS" />
      <Todo isCompleted={true} text="Learn Javascript" />
      <Todo isCompleted={false} text="Learn React" />
    </Container>
  </StrictMode>
);