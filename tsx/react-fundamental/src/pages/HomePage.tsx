import { Link, useNavigate } from "react-router";
export default function HomePage() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate({
      pathname: "/terms"
    })
  }

  return (
    <div>
      <h1>ini Home Page</h1>
      <p>setujui syarat dibawah ini</p>
      {/* hanya ganti di browser dan tidak request ke server lagi */}
      <Link to="/terms">menuju halaman terms</Link> <br />
      {/* tetap minta request ke server */}
      <a href="/terms">menuju halaman terms</a> <br />
      <button onClick={handleNavigate}>Menuju halaman terms</button>
    </div>
  );
}
