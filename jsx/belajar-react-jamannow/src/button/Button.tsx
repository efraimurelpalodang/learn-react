import type { PropsButton } from "../ts/types";

export default function Button(Props: PropsButton) {
  const {text, messageAlert} = Props;

  function handleCick() {
    alert(messageAlert);
  }

  return (
    <>
      <button onClick={handleCick}>{text}</button>
    </>
  );
}