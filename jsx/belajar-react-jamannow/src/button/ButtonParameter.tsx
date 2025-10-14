import type { PropsButtonParameter } from "../ts/types";

export default function ButtonParameter(Props: PropsButtonParameter) {
  const {onSmash, text} = Props;

  return (
    <>
      <button onClick={onSmash}>{text}</button>
    </>
  )
}