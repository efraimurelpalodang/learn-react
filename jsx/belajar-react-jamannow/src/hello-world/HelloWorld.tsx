import type { PropsHelloWorld } from "../ts/types";

export default function HelloWorld() {
  const Props: PropsHelloWorld = {
    text: 'Hello World! from spred syntax'
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "0" }}>
      <HeaderHelloWorld {...Props} />
      <ParagraphHelloWorld text="Selamat belajar ReactTs, dengan programmer jaman now" />
    </div>
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
      <p>{text.toLowerCase()}</p>
    </>
  );
}