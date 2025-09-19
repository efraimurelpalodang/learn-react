import { useRef, useState } from "react";

export default function FormPage() {
  // uncontrol component/input
  const InputNameRef = useRef<HTMLInputElement>(null);
  const InputEmailRef = useRef<HTMLInputElement>(null);

  // controlled component/input
  const [fullNameInput, setFullNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = () => {
    // const fullNameFormVal = InputNameRef.current?.value;
    // const EmailFormVal = InputEmailRef.current?.value;
    // alert(`hasil ketikan : ${fullNameFormVal}, ${EmailFormVal}`);
    if(fullNameInput.length < 3) {
      setUsernameErrorMessage("username minimal 3 karakter");
    } 
    if(passwordInput.length < 8) {
      setPasswordErrorMessage("password minimal 8 karakter");
    }
  };

  return (
    <div>
      <h1>Form Page</h1>

      <h3>{fullNameInput}</h3>
      <h3>{passwordInput}</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "7px", maxWidth: "200px" }}>
        <label htmlFor="username">Username</label>
        <input type="text" onChange={(e) => {
          setFullNameInput(e.target.value);
          if(e.target.value.length < 3) {
            setUsernameErrorMessage("username minimal 3 karakter");
          } else {
            setUsernameErrorMessage("");
          }
          }} name="username" id="username" autoComplete="off" value={fullNameInput} />
        <span style={{ color: "red", fontSize: "12px", marginTop: "-5px" }}>{usernameErrorMessage}</span>
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(e) => setPasswordInput(e.target.value)} name="pass" id="pass" autoComplete="off" value={passwordInput} />
        <span style={{ color: "red", fontSize: "12px", marginTop: "-5px" }}>{passwordErrorMessage}</span>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </div>
  );
}
