import type { Products } from "../ts/data";

export default function CardList(props: Products) {
  return (
    <div style={{ backgroundColor: "crimson", maxWidth: "300px", padding: "8px", boxSizing: "border-box", borderRadius: "5px"}}>
      <img src={props.img} alt="gambar" style={{width: "250px", height: "200px", objectFit: "cover"}}/>
      <h1>{props.nama}</h1>
      {/* <div>
        <p>{props.kategori}</p>
        <p>Rp 15.000</p>
      </div>
      <p>stok : 100</p> */}
    </div>
  );
}
