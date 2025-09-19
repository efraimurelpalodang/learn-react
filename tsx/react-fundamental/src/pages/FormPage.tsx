import { useRef, useState } from "react";

export default function FormPage() {
  // uncontrol component/input
  const InputNameRef = useRef<HTMLInputElement>(null);
  const InputEmailRef = useRef<HTMLInputElement>(null);

  // controlled component/input
  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handleSubmit = () => {
    const fullNameFormVal = InputNameRef.current?.value;
    const EmailFormVal = InputEmailRef.current?.value;
    alert(`hasil ketikan : ${fullNameFormVal}, ${EmailFormVal}`);
  };

  return (
    <div>
      <h1>Form Page</h1>

      <h3>{fullNameInput}</h3>
      <h3>{emailInput}</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "7px", maxWidth: "200px" }}>
        <label htmlFor="name">Your Full Name</label>
        <input type="text" onChange={(e) => setFullNameInput(e.target.value)} name="name" id="name" autoComplete="off" value={fullNameInput} />
        <label htmlFor="email">Your email</label>
        <input type="email" onChange={(e) => setEmailInput(e.target.value)} name="email" id="email" autoComplete="off" value={emailInput}/>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </div>
  );
}
