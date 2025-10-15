const ToolBar = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    alert("Hallo My friends");
  };

  return (
    <div onClick={handleClick}>
      <button onClick={handleClick}>First</button>
      <button onClick={handleClick}>Second</button>
    </div>
  );
}

export default ToolBar;