import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [likes, setLike] = useState(0);

  function handleClick() {
    setLike(likes + 1);
  }

  return (
    <div>
      <Header />
      <button onClick={handleClick}>Like {likes}</button>
    </div>
  );
}

export default App;
