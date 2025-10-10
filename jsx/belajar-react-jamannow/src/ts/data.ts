import type { PropsTodo } from "./types";

export const todos: PropsTodo[] = [
  {
    id: 0,
    text: "Learn HTML",
    isCompleted: true,
  },
  {
    id: 1,
    text: "Learn CSS",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Learn Javascript",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Learn Typescript",
    isCompleted: true,
    isDeleted: true,
  },
  {
    id: 4,
    text: "Learn React",
    isCompleted: false,
  },
];
