import type { ProfileCard } from "../ts/types";

export default function ProfileCard(props: ProfileCard) {
  const {name, year, job} = props;

  return (
    <div className="card">
      <h1>Card</h1>
      <p>Name : {name || "Anonymous"}</p>
      <p>Birt Year : {year}</p>
      {job && <p>Your job : {job}</p>}
    </div>
  );
}
