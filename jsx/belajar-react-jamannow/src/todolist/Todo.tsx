import type { PropsTodo } from "../ts/types";

export default function Todo(Props: PropsTodo) {
  const {isCompleted, text, isDeleted} = Props;
  if(isDeleted) {
    return null;
  } else {
    return (
      <li>{text}{isCompleted && ' ✔️'}</li>
    );
  }
}