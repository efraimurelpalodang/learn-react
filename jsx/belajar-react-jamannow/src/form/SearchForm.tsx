import type { buttonEvent } from "../ts/types";

const SearchForm = () => {
  const handleClick = (e: buttonEvent) => {
    e.preventDefault();
    alert("You Search");
  }

  return (
    <form action="">
      <input type="text" name="" id="" />
      <button onClick={handleClick}>search</button>
    </form>
  )
}

export default SearchForm;