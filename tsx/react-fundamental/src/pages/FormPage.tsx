import { useRef } from "react";

export default function FormPage() {
  // uncontrol component/input
  const InputNameRef = useRef<HTMLInputElement>(null);
  const InputEmailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const fullNameFormVal = InputNameRef.current?.value;
    const EmailFormVal = InputEmailRef.current?.value;
    alert(`hasil ketikan : ${fullNameFormVal}, ${EmailFormVal}`);
  };

  return (
    <div>
      <h1>Form Page</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "7px", maxWidth: "200px" }}>
        <label htmlFor="name">Your Full Name</label>
        <input type="text" ref={InputNameRef} name="name" id="name" autoComplete="off" />
        <label htmlFor="email">Your email</label>
        <input type="email" ref={InputEmailRef} name="email" id="email" autoComplete="off" />
        <button type="submit" onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
}
