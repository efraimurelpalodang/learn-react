import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HelloWorld  from "./HelloWorld";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import ToolBar from "../button/ToolBar";
import SearchForm from "../form/SearchForm";
import SayHalloForm from "../form/SayHalloForm";
import Counter from "../form/Counter";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <HelloWorld/>
      <TodoList />
      <Table/>
      <AlertButton text='Click Me' message='Tombol ini diklik'/>
      <AlertButton text='Click Me' message='Tombol ini diklik'/>
      <MyButton text='Smash Me' onSmash={() => alert('Hallo deck')}/>
      <ToolBar onClick={(e) => {
        e.stopPropagation();
        alert('You Click Toolbar');
      }}/>
      <SearchForm/>
      <SayHalloForm/>
      <Counter/>
      <Counter/>
    </Container>
  </StrictMode>
)