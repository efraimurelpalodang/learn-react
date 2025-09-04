import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      <Header />
      <h1>Hello, World!</h1>
      <div style={{ display: "flex", gap: "10px", flexDirection: "row" }}>
        <ProfileCard />
        <ProfileCard />
      </div>
      <Welcome />
    </div>
  );
}

export default App;
