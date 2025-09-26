import { useParams } from "react-router";
import { datas, type Products } from "../ts/data";
import { useHandleNavigate } from "../hooks/useHandleNavigase";

export default function DetailProduct() {
  const param = useParams<{ id: string }>();
  const {goBack} = useHandleNavigate() 
  const product: Products | undefined = datas.find((data) => data.id === Number(param.id));

  return (
    <div style={{ marginBlock: "100px", paddingInline: "80px" }}>
      <button onClick={goBack} style={{padding: "4px 10px", marginBottom: "25px"}}>Kembali ke Daftar Menu</button>
      {product ? (
        <div style={{ maxWidth: "70%", margin: "auto" }}>
          <img src={product.img} alt={`gambar ${product.nama}`} style={{ width: "100%", maxHeight: "350px", objectFit: "cover" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h1 style={{ fontSize: "45px" }}>{product.nama}</h1>
            <p style={{ fontSize: "25px" }}>Rp. {product.harga}</p>
          </div>
          <p>Description: {product.description ? product.description : "-"}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}
