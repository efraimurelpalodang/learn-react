import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import Button from "../button/Button";
import ButtonParameter from "../button/ButtonParameter";
import ToolBar from "../button/ToolBar";
import SearchForm from "../form/SearchForm";
import SayHalloForm from "../form/SayHalloForm";
import Counter from "../form/Counter";
import "./helloWorld.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <Button text="Click Me" messageAlert="Makasih bang sudah di click" />
      <ButtonParameter text="button yang menerima function parameter" onSmash={() => alert("Hallo deck")} />
      <ToolBar />
      <SearchForm />
      <SayHalloForm />
      <Counter />
      <Counter />
    </Container>
  </StrictMode>
);
