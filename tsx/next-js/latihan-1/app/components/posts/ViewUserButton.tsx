"use client";

export default function ViewUserButton() {
  const handleButtonClick = () => {
    alert("clicked");
  }

  return (
    <>
      <button onClick={handleButtonClick}>Lihat user</button>
    </>
  );
}
