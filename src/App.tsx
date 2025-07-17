import { useState } from "react";
import reactLogo from "./assets/react.svg";
import edgeLogo from "/edge.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://wasmer.io/products/edge" target="_blank">
          <img src={edgeLogo} className="edge-logo" alt="Edge logo" />
        </a>
      </div>
      <h1>Vite + React + Wasmer Edge</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Wasmer Edge logos to learn more about
      </p>
    </>
  );
}

export default App;
