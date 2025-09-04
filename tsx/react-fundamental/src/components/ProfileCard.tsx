export default function ProfileCard() {
  const name = "jhon Dae";
  const umur = "19 tahun";
  const negara = "United State";

  return (
    <div className="card">
      <h1>Card</h1>
      <p>Nama : {name}</p>
      <p>umur : {umur}</p>
      <p>Negara : {negara}</p>
    </div>
  );
}
