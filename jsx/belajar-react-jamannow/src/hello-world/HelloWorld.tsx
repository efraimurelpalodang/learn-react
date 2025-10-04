export default function HelloWorld() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "0" }}>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  )
}

function HeaderHelloWorld() {
  const text: string = "hello world";
  return (
    <>
      <h1 style={{ textTransform: "capitalize" }}>{text}</h1>
    </>
  );
}

function ParagraphHelloWorld() {
  const text: string = "Selamat belajar ReactTs, dengan programmer jaman now";
  return (
    <>
      <p>{text.toLowerCase()}</p>
    </>
  );
}