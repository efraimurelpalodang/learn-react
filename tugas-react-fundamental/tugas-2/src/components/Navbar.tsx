import { Link } from "react-router"

export default function Navbar() {
  return (
    <div style={{backgroundColor: "crimson", paddingBlock: "10px", paddingInline: "80px", display:"flex", alignItems: "center", justifyContent: "space-between", position: "fixed", top: "0", left: "0", right: "0",}}>
      <h1>Navbar</h1>
      <ul style={{display: "flex", justifyContent: "space-around", gap: "40px", fontSize: "16px", fontWeight: "500"}}>
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/products">Daftar Menu</Link></li>
        <li><Link to="/about">Tentang Kami</Link></li>
        <li><Link to="/contact">Kontak</Link></li>
      </ul>
    </div>
  )
}