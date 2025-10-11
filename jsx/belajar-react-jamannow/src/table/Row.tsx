import type { PropsRow } from "../ts/types";

export default function Row(Props: PropsRow) {
  const {text, id} = Props;
  
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{text}</td>
      </tr>
    </>
  )
}