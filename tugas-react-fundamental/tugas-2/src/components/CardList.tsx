import type { Products } from "../ts/data";
import { Link } from "react-router";

export default function CardList(props: Products) {
  const path = `/product/${props.id}`;

  return (
    <div style={{ backgroundColor: "crimson", maxWidth: "300px", padding: "8px", boxSizing: "border-box", borderRadius: "5px" }}>
      <img src={props.img} alt="gambar" style={{ width: "250px", height: "200px", objectFit: "cover" }} />
      <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
        <h1 style={{ fontSize: "25px", textTransform: "capitalize" }}>{props.nama}</h1>
        <Link to={path} style={{ background: "#242424", padding: "2px 10px", textAlign: "center", color: "#eaeaea", textTransform: "capitalize", fontWeight: "500", borderRadius: "20px" }}>
          Detail {props.nama}
        </Link>
      </div>
    </div>
  );
}
