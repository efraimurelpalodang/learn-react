import type { PropsHelloWorld } from "../ts/types";

export default function HelloWorld() {
  const Props: PropsHelloWorld = {
    text: 'Hello World! from spred syntax'
  }

  return (
    <>
      <HeaderHelloWorld {...Props} />
      <ParagraphHelloWorld text="Selamat belajar ReactTs, dengan programmer jaman now" />
    </>
  )
}

function HeaderHelloWorld(Props: PropsHelloWorld) {
  const {text} = Props;
  return (
    <>
      <h1 style={{ textTransform: "capitalize" }}>{text}</h1>
    </>
  );
}

function ParagraphHelloWorld(Props: PropsHelloWorld) {
  const {text} = Props;
  return (
    <>
      <p className="sans-serif">{text.toLowerCase()}</p>
    </>
  );
}