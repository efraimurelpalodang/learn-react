import type { PropsTodo } from "./types";

export const todos: PropsTodo[] = [
  {
    text: "Learn HTML",
    isCompleted: true,
  },
  {
    text: "Learn CSS",
    isCompleted: true,
  },
  {
    text: "Learn Javascript",
    isCompleted: true,
  },
  {
    text: "Learn Typescript",
    isCompleted: true,
    isDeleted: true,
  },
  {
    text: "Learn React",
    isCompleted: false,
  },
];
