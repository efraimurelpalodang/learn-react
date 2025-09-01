import './HelloWorld.css';

export default function HelloWorld() {
  const props = {
    text: 'Hello World',
    nama: 'Jhon Dae'
  }
  return (
    <div>
      <HeaderHelloWorld {...props}/>
      <ParagraphHelloWorld/>      
    </div>
  );
}

export function HeaderHelloWorld({text="upss, lupa ngasih text!", nama="no name"}) {
  return (
    <h1 className='tittle'>{text.toUpperCase() + ` ${nama}`}</h1>
  )
}

export function ParagraphHelloWorld() {
  const text = "Selamat Belajar React, dari programmer jaman now!!";
  return (
    <p className='content'>{text.toLocaleLowerCase()}</p>
  )
}
