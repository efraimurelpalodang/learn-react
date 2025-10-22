import type { buttonEvent } from "../ts/types";

const SayHalloForm = () => {
  const handleClick = (e: buttonEvent) => {
    e.preventDefault();
    const h1 = document.getElementById('sayHallo');
    const namaInput = document.getElementById("nama") as HTMLInputElement | null;
    const nama = namaInput ? namaInput.value : "";
    if (h1) {
      h1.innerText = `Hello ${nama}`;
    }
  };

  return (
    <>
      <form action="" method="post">
        <label htmlFor="nama">
          Masukkan Nama :
          <input type="text" id="nama" />
        </label>
        <button type="submit" onClick={handleClick}>
          kirim
        </button>
      </form>
      <h1 id="sayHallo">Hello World</h1>
    </>
  );
};
export default SayHalloForm;
