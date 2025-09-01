export default function ToolBar({onClick}) {
  return (
    <div onClick={onClick} style={{backgroundColor: "red"}}>
      <button onClick={onClick}>First</button>
      <button onClick={onClick}>Second</button>
    </div>
  )
}