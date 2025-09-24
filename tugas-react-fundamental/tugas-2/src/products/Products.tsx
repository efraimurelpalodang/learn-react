import CardList from "../components/CardList";
import {datas} from "../ts/data"

export default function Products() {
  return (
    <div style={{ marginTop: "80px" }}>
      <h1 style={{ textAlign: "center" }}>Welcome to my products</h1>
      <div style={{display: "flex", flexWrap: "wrap", gap: "25px", marginInline: "200px", marginBlock: "50px", justifyContent: "space-evenly"}}>
        {
          datas.map((data) => {
            return <CardList key={data.id} {...data}/>;
          })
        }
        
      </div>
    </div>
  );
}
