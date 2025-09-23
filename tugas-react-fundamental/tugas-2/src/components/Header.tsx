import { Link } from "react-router"

export default function Header() {
  return (
    <div style={{backgroundColor: "crimson", paddingBlock: "10px", paddingInline: "20px", display:"flex", alignItems: "center", justifyContent: "space-between", position: "fixed", top: "0", left: "0", right: "0",}}>
      <h1>Navbar</h1>
      <ul style={{display: "flex", justifyContent: "space-around", gap: "40px", fontSize: "16px", fontWeight: "500"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}