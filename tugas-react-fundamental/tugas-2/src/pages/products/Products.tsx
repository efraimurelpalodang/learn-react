import CardList from "../../components/CardList";
import { datas } from "../../ts/data";
import Container from "../../components/Container";

export default function Products() {
  return (
    <Container>
      <h1 style={{ textAlign: "center", textTransform: "capitalize", fontSize: "45px" }}>Daftar menu makanan</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", marginInline: "200px", marginBlock: "50px", justifyContent: "space-evenly" }}>
        {datas.map((data) => {
          return <CardList key={data.id} {...data} />;
        })}
      </div>
    </Container>
  );
}
