import type { ChildContainer } from "../ts/types";

export default function Container({children}: ChildContainer) {
  return <div className="container">
    <header>
      <h3>Ini adalah Header Container</h3>
    </header>
    <div className="child">
      {children}
    </div>
    <footer>
      <p>&copy;2025 Jhon Dae</p>
    </footer>
  </div>;
}