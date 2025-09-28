import Container from "../../components/Container";

export default function Contact() {
  return (
    <Container style={{ marginInline: "80px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2em" }}>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>Kontak kami</h1>
      <form action="" style={{ display: "flex", flexDirection: "column", gap: "6px"}}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" style={{ height: "20px", width: "23em" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" style={{ height: "20px", width: "23em" }} />
        </div>
        <textarea style={{ width: "23em", height: "5em" }} placeholder="your message"></textarea>
      </form>
    </Container>
  );
}
