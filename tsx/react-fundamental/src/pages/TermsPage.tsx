import { useNavigate } from "react-router";

export default function TermsPage() {
  const navigate = useNavigate();

  function handleGoBackNavigate() {
    navigate(-1)
  }

  return (
    <div>
      <h1>ini Terms Page</h1>
      <button onClick={handleGoBackNavigate}>Go Back</button>
    </div>
  );
}
