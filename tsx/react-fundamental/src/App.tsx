import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ProfileCard from "./components/ProfileCard";
import type { Teacher } from "./ts/types";

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Jhon",
    job: "Dosen",
    year: 2000,
  },
  {
    id: 2,
    name: "Dae",
    job: "Teknikal analisis",
    year: 2003,
  },
  {
    id: 3,
    name: "Alice",
    job: "Senior developer",
    year: 1995,
  },
];

function App() {
  return (
    <div>
      <Header />
      <h1>Hello, World!</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        {teachers.map((teacher) => {
          return <ProfileCard name={teacher.name} job={teacher.job} year={teacher.year} key={teacher.id} />;
        })}
      </div>
      <Welcome />
    </div>
  );
}

export default App;
