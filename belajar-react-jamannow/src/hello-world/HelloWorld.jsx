export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld/>
      <ParagraphHelloWorld/>      
    </div>
  );
}

export function HeaderHelloWorld() {
  const text = "hello, world!";
  return (
    <h1>{text.toUpperCase()}</h1>
  )
}

export function ParagraphHelloWorld() {
  const text = "Selamat Belajar React, dari programmer jaman now!!";
  return (
    <p>{text.toLocaleLowerCase()}</p>
  )
}