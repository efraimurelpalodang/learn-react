import Row from "./Row"

export default function Table() {
  return (
    <table border={1}>
      <tbody>
        <Row text="Satu" id={1} />
        <Row text="Dua" id={2} />
        <Row text="tiga" id={3} />
      </tbody>
    </table>
  );
}