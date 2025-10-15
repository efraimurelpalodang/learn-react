import type { PropsButton } from "../ts/types";

export default function Button({text, messageAlert}: PropsButton) {

  const handleCick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.info(e.target);
    alert(messageAlert);
  }

  return (
    <>
      <button onClick={handleCick}>{text}</button>
    </>
  );
}